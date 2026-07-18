# Specification

## Scope

Open local DOCX files as read-only, paginated previews inside Neovim. Preserve
the visual output of `docx-renderer`; do not expose extracted text as a substitute.

## Runtime

Neovim owns document state and navigation. A Node process starts an ephemeral
loopback-only HTTP server, renders one document in headless Chrome, captures each
page as PNG, reports completed pages in order, writes a manifest after every page
is complete, then exits. Neovim displays the first completed page without waiting
for the final manifest. Snacks owns terminal image placement.

Generated files live under Neovim's cache directory. Source documents are never
modified. A complete cached preview is reused when the source size and modification
time are unchanged. Explicit refresh bypasses the cache. Render failures replace
the preview with an explicit error, and incomplete output is not reusable cache.

## Interface

`BufReadCmd` handles `*.docx`. A document buffer has one current page and supports
next, previous, first, last, refresh, and close actions. Page movement is bounded;
it does not wrap.

Configuration controls the Node executable, browser executable, render timeout,
and buffer-local mappings. Chrome discovery uses `CHROME_PATH` and common commands.

## Compatibility

Neovim 0.10+, Node.js 20+, Chrome/Chromium, and a terminal supported by the Snacks
Kitty graphics backend. Unsupported terminals and disabled image support are hard
errors, not degraded text previews.
