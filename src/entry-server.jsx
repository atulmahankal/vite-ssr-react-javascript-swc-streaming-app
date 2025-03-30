import { StrictMode } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routes";

/**
 * @param {string} url
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} [options]
 */
export function render(url, options) {
  const router = createRouter(url);

  return renderToPipeableStream(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
    options
  );
}
