import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import HostLayout from "./components/HostLayout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Dashboard from "./pages/Host/Dashboard";
import App from "./App";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "vans",
        element: <Vans />,
      },
      {
        path: "vans/:id",
        element: <VanDetail />,
      },
      {
        path: "host",
        element: <HostLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "vans",
            element: <HostVans />,
          },
          {
            path: "vans/:van_id",
            element: <HostVanDetail />,
          },
          {
            path: "income",
            element: <Income />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
