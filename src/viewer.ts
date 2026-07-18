import { render } from "docx-renderer";

interface PreviewPage {
  width: number;
  height: number;
}

declare global {
  interface Window {
    officeError?: string;
    officeReady?: { pages: PreviewPage[] };
  }
}

async function nextFrame(): Promise<void> {
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
}

async function main(): Promise<void> {
  const documentContainer = document.querySelector<HTMLElement>("#document");
  const styleContainer = document.querySelector<HTMLElement>("#styles");
  if (!documentContainer || !styleContainer) {
    throw new Error("Preview containers are missing");
  }

  const response = await fetch("/document.docx");
  if (!response.ok) {
    throw new Error(`Could not load document: HTTP ${response.status}`);
  }

  await render(await response.arrayBuffer(), documentContainer, styleContainer, {
    breakPages: true,
    inWrapper: true,
    useBase64URL: true,
  });

  await document.fonts.ready;
  await nextFrame();
  await nextFrame();

  const pages = Array.from(documentContainer.querySelectorAll<HTMLElement>("section.docx"));
  if (pages.length === 0) {
    throw new Error("The renderer produced no pages");
  }

  window.officeReady = {
    pages: pages.map((page) => {
      const bounds = page.getBoundingClientRect();
      return { width: bounds.width, height: bounds.height };
    }),
  };
}

main().catch((error: unknown) => {
  window.officeError = error instanceof Error ? error.message : String(error);
});

