local config = require("nvim-office.config")
local renderer = require("nvim-office.render")

local M = {}
local states = {}

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
  clean_image(buffer)
  replace_lines(buffer, {
    "nvim-office could not render this document.",
    "",
    message,
  })
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

  replace_lines(buffer, {
    string.format("%s  ·  page %d/%d", vim.fn.fnamemodify(state.source, ":t"), state.page, #state.pages),
    "",
  })
  vim.bo[buffer].filetype = "nvim-office"
  snacks.image.buf.attach(buffer, {
    src = vim.fs.joinpath(state.output, page.file),
    pos = { 2, 0 },
  })
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
  replace_lines(buffer, { "Rendering " .. vim.fn.fnamemodify(state.source, ":t") .. "…" })

  state.job = renderer.run(state.source, state.output, config.get(), function(err)
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
    page = 1,
    generation = 0,
    job = nil,
  }
  set_keymaps(buffer)
  M.refresh(buffer)
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
