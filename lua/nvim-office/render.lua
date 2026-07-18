local M = {}

local function script_path()
  local paths = vim.api.nvim_get_runtime_file("bin/render.mjs", false)
  if #paths == 0 then
    return nil
  end
  return paths[1]
end

local function consume_lines(buffer, data, callback)
  buffer = buffer .. data
  while true do
    local newline = buffer:find("\n", 1, true)
    if not newline then
      return buffer
    end
    callback(buffer:sub(1, newline - 1))
    buffer = buffer:sub(newline + 1)
  end
end

function M.run(source, output, options, on_page, callback)
  local script = script_path()
  if not script then
    callback("Could not find bin/render.mjs")
    return nil
  end

  local command = { options.node, script, source, output }
  if options.browser then
    table.insert(command, options.browser)
  end

  local stdout = ""
  return vim.system(command, {
    text = true,
    timeout = options.render_timeout,
    stdout = function(err, data)
      if err or not data then
        return
      end
      stdout = consume_lines(stdout, data, function(line)
        local ok, event = pcall(vim.json.decode, line)
        if ok and type(event) == "table" and event.type == "page" then
          vim.schedule(function()
            on_page(event)
          end)
        end
      end)
    end,
  }, vim.schedule_wrap(function(result)
    if result.code ~= 0 then
      local message = result.stderr:gsub("%s+$", "")
      if message == "" then
        message = "Renderer exited with code " .. result.code
      end
      callback(message)
      return
    end
    callback(nil)
  end))
end

return M
