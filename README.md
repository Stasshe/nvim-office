# nvim-office

High-fidelity DOCX previews inside Neovim. `nvim-office` renders documents with
[`docx-renderer`](https://www.npmjs.com/package/docx-renderer), captures each Word
page in headless Chrome, and displays it through the Kitty graphics protocol.

## Requirements

- Neovim 0.10 or newer
- Node.js 20 or newer
- Google Chrome or Chromium
- [snacks.nvim](https://github.com/folke/snacks.nvim) with image support enabled
- kitty, Ghostty, or WezTerm

Zellij cannot pass the required graphics protocol through to Neovim.

## Installation

With lazy.nvim:

```lua
{
  "Stasshe/nvim-office",
  dependencies = { "folke/snacks.nvim" },
  build = "npm install --omit=dev",
  opts = {},
}
```

Enable the Snacks image module:

```lua
{
  "folke/snacks.nvim",
  opts = {
    image = {},
  },
}
```

## Usage

Open a document normally:

```sh
nvim document.docx
```

The preview is read-only. Default mappings:

| Key | Action |
| --- | --- |
| `j` | Next page |
| `k` | Previous page |
| `gg` | First page |
| `G` | Last page |
| `r` | Render again |
| `q` | Close preview |

Commands `:NvimOfficeNext`, `:NvimOfficePrevious`, and
`:NvimOfficeRefresh` provide the same operations.

## Configuration

```lua
require("nvim-office").setup({
  browser = "/path/to/chrome",
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
})
```

`browser` is optional when Chrome or Chromium is on `PATH`. Set `CHROME_PATH`
to configure it without Lua. A key can be disabled by assigning `false`.

## Development

```sh
pnpm install
pnpm check
pnpm build
```

Render a file without Neovim:

```sh
pnpm render document.docx /tmp/nvim-office-preview
```

## License

MIT
