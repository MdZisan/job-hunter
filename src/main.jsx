import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/HomePageComponents/Home";
import Statistics from "./Components/Statistics/Statistics";
import MainLayout from "./Components/MainLayout/MainLayout";
import DetailsAboutJobs from "./Components/HomePageComponents/FeaturedJobs/DetailsAboutJobs";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"job/:jobId",
        element: <DetailsAboutJobs></DetailsAboutJobs>
      }
      ,
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "Blog",
        element: <Blogs/>
      }
    ],
   
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
