# Design Intent

DOCX is page geometry, not styled text. Terminal text conversion destroys the
reason to use `docx-renderer`, so the preview boundary is a page image.

Browser layout stays outside Neovim. Neovim manages buffers and commands; Chrome
alone resolves DOM layout and captures pixels. This keeps the renderer's browser
contract intact and the Lua layer small.

The source file is immutable. Cache output is disposable and errors stay visible.
Only a completed render becomes reusable cache; source changes and explicit refresh
invalidate it. The first completed page crosses the preview boundary immediately so
later page capture does not delay useful output.
Editing belongs to a separate design because pretending a binary DOCX buffer is
editable risks document loss.
