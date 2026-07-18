if vim.g.loaded_nvim_office then
  return
end
vim.g.loaded_nvim_office = true

local group = vim.api.nvim_create_augroup("nvim-office", { clear = true })

vim.api.nvim_create_autocmd("BufReadCmd", {
  group = group,
  pattern = "*.docx",
  callback = function(event)
    require("nvim-office").open(event.buf, event.match)
  end,
})

vim.api.nvim_create_user_command("NvimOfficeRefresh", function()
  require("nvim-office").refresh(0)
end, {})

vim.api.nvim_create_user_command("NvimOfficeNext", function()
  require("nvim-office").next_page(0)
end, {})

vim.api.nvim_create_user_command("NvimOfficePrevious", function()
  require("nvim-office").previous_page(0)
end, {})

