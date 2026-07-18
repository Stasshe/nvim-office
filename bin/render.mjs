#!/usr/bin/env node

import { access, mkdir, readFile, readdir, stat, unlink, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import { createServer } from "node:http";
import { delimiter, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const viewerPath = join(root, "dist", "viewer.js");

function usage() {
  return "Usage: render.mjs <input.docx> <output-directory> [browser-executable]";
}

async function executable(path) {
  if (!path) return null;
  try {
    await access(path, constants.X_OK);
    return path;
  } catch {
    return null;
  }
}

async function commandPath(name) {
  for (const directory of (process.env.PATH ?? "").split(delimiter)) {
    const path = await executable(join(directory, name));
    if (path) return path;
  }
  return null;
}

async function findBrowser(requested) {
  const direct = await executable(requested ?? process.env.CHROME_PATH);
  if (direct) return direct;

  const names = process.platform === "win32"
    ? ["chrome.exe", "msedge.exe"]
    : ["google-chrome-stable", "google-chrome", "chromium", "chromium-browser"];
  for (const name of names) {
    const path = await commandPath(name);
    if (path) return path;
  }

  if (process.platform === "darwin") {
    const applications = [
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      "/Applications/Chromium.app/Contents/MacOS/Chromium",
    ];
    for (const application of applications) {
      const path = await executable(application);
      if (path) return path;
    }
  }

  throw new Error("Chrome or Chromium was not found. Set browser in require('nvim-office').setup().");
}

async function clearPages(outputDirectory) {
  await mkdir(outputDirectory, { recursive: true });
  const entries = await readdir(outputDirectory);
  const generated = entries.filter((entry) => /^page-\d+(?:-\d+-\d+)?\.png$/.test(entry) || entry === "manifest.json");
  await Promise.all(generated.map((entry) => unlink(join(outputDirectory, entry))));
}

async function startServer(documentPath) {
  const document = await readFile(documentPath);
  const viewer = await readFile(viewerPath);
  const html = Buffer.from(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <style id="styles"></style>
    <style>
      html, body { margin: 0; background: #202124; }
      .docx-wrapper { padding: 0 !important; background: transparent !important; }
      section.docx { margin: 0 !important; box-shadow: none !important; }
    </style>
  </head>
  <body>
    <main id="document"></main>
    <script src="/viewer.js"></script>
  </body>
</html>`);

  const server = createServer((request, response) => {
    if (request.url === "/") {
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(html);
      return;
    }
    if (request.url === "/viewer.js") {
      response.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8" });
      response.end(viewer);
      return;
    }
    if (request.url === "/document.docx") {
      response.writeHead(200, { "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
      response.end(document);
      return;
    }
    response.writeHead(404);
    response.end();
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const address = server.address();
  if (!address || typeof address === "string") {
    server.close();
    throw new Error("Could not start the preview server");
  }
  return { server, url: `http://127.0.0.1:${address.port}/` };
}

async function renderDocument(input, outputDirectory, browserPath) {
  await access(input, constants.R_OK);
  await access(viewerPath, constants.R_OK);
  const sourceStat = await stat(input);
  await clearPages(outputDirectory);

  const { server, url } = await startServer(input);
  let browser;
  try {
    browser = await chromium.launch({ executablePath: browserPath, headless: true });
    const page = await browser.newPage({ deviceScaleFactor: 1, viewport: { width: 1600, height: 2200 } });
    await page.goto(url, { waitUntil: "load" });
    await page.waitForFunction(() => window.officeReady || window.officeError, null, { timeout: 30_000 });

    const error = await page.evaluate(() => window.officeError);
    if (error) throw new Error(error);

    const pageData = await page.evaluate(() => window.officeReady?.pages ?? []);
    const sections = page.locator("section.docx");
    if (await sections.count() !== pageData.length) {
      throw new Error("Rendered page metadata is inconsistent");
    }

    const files = [];
    const renderId = `${Date.now()}-${process.pid}`;
    for (let index = 0; index < pageData.length; index += 1) {
      const file = `page-${index + 1}-${renderId}.png`;
      await sections.nth(index).screenshot({ path: join(outputDirectory, file) });
      const renderedPage = { file, ...pageData[index] };
      files.push(renderedPage);
      process.stdout.write(`${JSON.stringify({
        type: "page",
        index: index + 1,
        pageCount: pageData.length,
        page: renderedPage,
      })}\n`);
    }

    const manifest = {
      source: input,
      sourceMetadata: {
        size: sourceStat.size,
        mtimeMs: Math.trunc(sourceStat.mtimeMs),
      },
      pages: files,
    };
    await writeFile(join(outputDirectory, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  } finally {
    await browser?.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

const [input, outputDirectory, requestedBrowser] = process.argv.slice(2);
if (!input || !outputDirectory) {
  process.stderr.write(`${usage()}\n`);
  process.exitCode = 2;
} else {
  try {
    const browser = await findBrowser(requestedBrowser);
    await renderDocument(input, outputDirectory, browser);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    process.stderr.write(`nvim-office: ${message}\n`);
    process.exitCode = 1;
  }
}
