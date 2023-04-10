import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/HomePageComponents/Home";
import Statistics from "./Components/Statistics/Statistics";
import MainLayout from "./Components/MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "appliedJobs",
        element: <h2>appliedJobs</h2>,
      },
      {
        path: "Blog",
        element: <h2>Blog</h2>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
