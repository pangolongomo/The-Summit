import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import "./styles/starting.css";
import "./styles/style.css";
import Lodge from "./pages/Lodge";
import SkyRuns from "./pages/SkyRuns";
import GetHere from "./pages/getHere";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/lodge", element: <Lodge /> },
      { path: "/skiruns", element: <SkyRuns /> },
      { path: "/gethere", element: <GetHere /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
