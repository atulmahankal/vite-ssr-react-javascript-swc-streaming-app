import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { createRouter } from "./routes"

const router = createRouter()

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
