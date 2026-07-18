local M = {}

local defaults = {
  browser = nil,
  node = "node",
  render_timeout = 30000,
  keymaps = {
    next = "j",
    previous = "k",
    first = "gg",
    last = "G",
    refresh = "r",
    close = "q",
  },
}

local options = vim.deepcopy(defaults)

function M.setup(user_options)
  if user_options ~= nil and type(user_options) ~= "table" then
    error("nvim-office setup options must be a table")
  end
  options = vim.tbl_deep_extend("force", vim.deepcopy(defaults), user_options or {})
end

function M.get()
  return options
end

return M

