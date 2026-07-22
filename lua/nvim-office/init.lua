local config = require("nvim-office.config")
local renderer = require("nvim-office.render")

local M = {}
local states = {}
local image_namespace = vim.api.nvim_create_namespace("snacks.image")

local function resolve_buffer(buffer)
  if buffer == nil or buffer == 0 then
    return vim.api.nvim_get_current_buf()
  end
  return buffer
end

local function state_for(buffer)
  return states[buffer]
end

local function replace_lines(buffer, lines)
  local readonly = vim.bo[buffer].readonly
  vim.bo[buffer].readonly = false
  vim.bo[buffer].modifiable = true
  vim.api.nvim_buf_set_lines(buffer, 0, -1, false, lines)
  vim.bo[buffer].modifiable = false
  vim.bo[buffer].modified = false
  vim.bo[buffer].readonly = readonly
end

local function clean_image(buffer)
  local ok, snacks = pcall(require, "snacks")
  if ok then
    snacks.image.placement.clean(buffer)
  end
end

local function show_error(buffer, message)
  if not vim.api.nvim_buf_is_valid(buffer) then
    return
  end
  local state = state_for(buffer)
  if state then
    state.displayed_file = nil
  end
  clean_image(buffer)
  local lines = {
    "nvim-office could not render this document.",
    "",
  }
  vim.list_extend(lines, vim.split(message, "\n", { plain = true }))
  replace_lines(buffer, lines)
  vim.bo[buffer].filetype = "nvim-office-error"
end

local function read_manifest(path)
  local ok, lines = pcall(vim.fn.readfile, path)
  if not ok then
    return nil, "Could not read the render manifest"
  end
  local decoded_ok, manifest = pcall(vim.json.decode, table.concat(lines, "\n"))
  if not decoded_ok or type(manifest) ~= "table" or type(manifest.pages) ~= "table" then
    return nil, "The render manifest is invalid"
  end
  return manifest, nil
end

local function source_metadata(path)
  local source_stat = vim.uv.fs_stat(path)
  if not source_stat then
    return nil
  end
  return {
    size = source_stat.size,
    mtimeMs = source_stat.mtime.sec * 1000 + math.floor(source_stat.mtime.nsec / 1000000),
  }
end

local function read_cached_manifest(source, output)
  local manifest = read_manifest(vim.fs.joinpath(output, "manifest.json"))
  if not manifest or manifest.source ~= source or type(manifest.sourceMetadata) ~= "table" then
    return nil
  end

  local metadata = source_metadata(source)
  if not metadata
    or manifest.sourceMetadata.size ~= metadata.size
    or manifest.sourceMetadata.mtimeMs ~= metadata.mtimeMs
  then
    return nil
  end

  if #manifest.pages == 0 then
    return nil
  end
  for _, page in ipairs(manifest.pages) do
    if type(page.file) ~= "string" or not vim.uv.fs_stat(vim.fs.joinpath(output, page.file)) then
      return nil
    end
  end
  return manifest
end

local function page_lines(state)
  return {
    string.format(
      "%s  ·  page %d/%d",
      vim.fn.fnamemodify(state.source, ":t"),
      state.page,
      math.max(state.total_pages, #state.pages)
    ),
    "",
  }
end

local function show_page(buffer)
  local state = state_for(buffer)
  if not state or not vim.api.nvim_buf_is_valid(buffer) then
    return
  end

  local ok, snacks = pcall(require, "snacks")
  if not ok then
    show_error(buffer, "snacks.nvim with its image module is required")
    return
  end
  if snacks.image.config.enabled == false then
    show_error(buffer, "snacks.nvim image support is disabled")
    return
  end

  local page = state.pages[state.page]
  if not page then
    show_error(buffer, "The selected page does not exist")
    return
  end
  local source = vim.fs.joinpath(state.output, page.file)
  if state.displayed_file == source then
    return
  end

  replace_lines(buffer, page_lines(state))
  vim.bo[buffer].filetype = "nvim-office"
  snacks.image.buf.attach(buffer, {
    src = source,
    pos = { 1, 0 },
    on_update_pre = function(placement)
      local current = state_for(buffer)
      if not current or current.displayed_file ~= source or not vim.api.nvim_buf_is_valid(buffer) then
        return
      end
      vim.api.nvim_buf_clear_namespace(buffer, image_namespace, 0, -1)
      local lines = page_lines(current)
      if not vim.deep_equal(vim.api.nvim_buf_get_lines(buffer, 0, #lines, false), lines) then
        replace_lines(buffer, lines)
      end
      vim.bo[buffer].filetype = "nvim-office"
      placement.opts.pos = { 2, 0 }
    end,
  })
  state.displayed_file = source
end

local function move(buffer, page)
  local state = state_for(buffer)
  if not state or #state.pages == 0 then
    return
  end
  state.page = math.max(1, math.min(page, #state.pages))
  show_page(buffer)
end

function M.next_page(buffer)
  buffer = resolve_buffer(buffer)
  local state = state_for(buffer)
  if state then
    move(buffer, state.page + 1)
  end
end

function M.previous_page(buffer)
  buffer = resolve_buffer(buffer)
  local state = state_for(buffer)
  if state then
    move(buffer, state.page - 1)
  end
end

function M.first_page(buffer)
  move(resolve_buffer(buffer), 1)
end

function M.last_page(buffer)
  buffer = resolve_buffer(buffer)
  local state = state_for(buffer)
  if state then
    move(buffer, #state.pages)
  end
end

function M.refresh(buffer)
  buffer = resolve_buffer(buffer)
  local state = state_for(buffer)
  if not state then
    return
  end

  state.generation = state.generation + 1
  local generation = state.generation
  if state.job then
    state.job:kill(15)
  end
  clean_image(buffer)
  state.displayed_file = nil
  replace_lines(buffer, { "Rendering " .. vim.fn.fnamemodify(state.source, ":t") .. "…" })
  state.pages = {}
  state.total_pages = 0
  state.page = 1

  state.job = renderer.run(state.source, state.output, config.get(), function(event)
    local current = state_for(buffer)
    if not current or current.generation ~= generation then
      return
    end
    if type(event.index) ~= "number" or type(event.pageCount) ~= "number" or type(event.page) ~= "table" then
      return
    end
    current.pages[event.index] = event.page
    current.total_pages = event.pageCount
    if event.index == current.page then
      show_page(buffer)
    end
  end, function(err)
    local current = state_for(buffer)
    if not current or current.generation ~= generation then
      return
    end
    current.job = nil
    if err then
      show_error(buffer, err)
      return
    end

    local manifest, manifest_error = read_manifest(vim.fs.joinpath(current.output, "manifest.json"))
    if manifest_error then
      show_error(buffer, manifest_error)
      return
    end
    current.pages = manifest.pages
    current.total_pages = #manifest.pages
    current.page = math.min(current.page, #current.pages)
    show_page(buffer)
  end)
end

local function set_keymaps(buffer)
  local mappings = config.get().keymaps
  local actions = {
    { mappings.next, M.next_page },
    { mappings.previous, M.previous_page },
    { mappings.first, M.first_page },
    { mappings.last, M.last_page },
    { mappings.refresh, M.refresh },
    { mappings.close, function() vim.api.nvim_buf_delete(buffer, {}) end },
  }
  for _, mapping in ipairs(actions) do
    if mapping[1] then
      vim.keymap.set("n", mapping[1], function() mapping[2](buffer) end, {
        buffer = buffer,
        nowait = true,
        silent = true,
      })
    end
  end
end

function M.open(buffer, path)
  buffer = resolve_buffer(buffer)
  local source = vim.fn.fnamemodify(path or vim.api.nvim_buf_get_name(buffer), ":p")
  local output = vim.fs.joinpath(vim.fn.stdpath("cache"), "nvim-office", vim.fn.sha256(source))

  vim.bo[buffer].buftype = "nofile"
  vim.bo[buffer].bufhidden = "hide"
  vim.bo[buffer].swapfile = false
  vim.bo[buffer].undofile = false
  vim.bo[buffer].readonly = true
  states[buffer] = {
    source = source,
    output = output,
    pages = {},
    total_pages = 0,
    displayed_file = nil,
    page = 1,
    generation = 0,
    job = nil,
  }
  set_keymaps(buffer)
  local manifest = read_cached_manifest(source, output)
  if manifest then
    states[buffer].pages = manifest.pages
    states[buffer].total_pages = #manifest.pages
    show_page(buffer)
  else
    M.refresh(buffer)
  end
end

function M.setup(options)
  config.setup(options)
end

vim.api.nvim_create_autocmd("BufDelete", {
  group = vim.api.nvim_create_augroup("nvim-office-cleanup", { clear = true }),
  callback = function(event)
    local state = state_for(event.buf)
    if state and state.job then
      state.job:kill(15)
    end
    clean_image(event.buf)
    states[event.buf] = nil
  end,
})

return M
