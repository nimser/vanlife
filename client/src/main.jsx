import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login, { action as loginAction } from "./pages/Login";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans, { loader as vansLoader } from "./pages/Vans";
import VanDetail, { loader as vansDetailLoader } from "./pages/VanDetail";
import HostLayout from "./components/HostLayout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard";
import App, { loader as appLoader } from "./App";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVansDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    loader: appLoader,
    errorElement: <Error />,
    children: [
      {
        path: "login",
        element: <Login />,
        errorElement: <Login />,
        action: loginAction,
      },
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
        loader: vansLoader,
      },
      {
        path: "vans/:id",
        element: <VanDetail />,
        loader: vansDetailLoader,
      },
      {
        path: "host",
        element: <HostLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: dashboardLoader,
          },
          {
            path: "vans",
            element: <HostVans />,
            loader: hostVansLoader,
          },
          {
            path: "vans/:van_id",
            element: <HostVanDetail />,
            loader: hostVansDetailLoader,
            children: [
              {
                index: true,
                element: <HostVanInfo />,
              },
              {
                path: "pricing",
                element: <HostVanPricing />,
              },
              {
                path: "photos",
                element: <HostVanPhotos />,
              },
            ],
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
