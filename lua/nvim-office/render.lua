local M = {}

local function script_path()
  local paths = vim.api.nvim_get_runtime_file("bin/render.mjs", false)
  if #paths == 0 then
    return nil
  end
  return paths[1]
end

function M.run(source, output, options, callback)
  local script = script_path()
  if not script then
    callback("Could not find bin/render.mjs")
    return nil
  end

  local command = { options.node, script, source, output }
  if options.browser then
    table.insert(command, options.browser)
  end

  return vim.system(command, {
    text = true,
    timeout = options.render_timeout,
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

