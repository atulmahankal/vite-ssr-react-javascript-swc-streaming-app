import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import App from "@App/App";
import About from "@Pages/About";
import Home from "@Pages/Home";
import NotFound from "@Pages/NotFound";

export const createRouter = (url = "/") => {
  const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ];

  // Ensure the URL is absolute
  const absoluteUrl = url.startsWith("/") ? url : `/${url}`;

  return typeof window !== "undefined"
    ? createBrowserRouter(routes)
    : createMemoryRouter(routes, { initialEntries: [absoluteUrl] });
};
