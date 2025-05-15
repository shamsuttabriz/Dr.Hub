import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import MyBooks from "../pages/MyBooks";
import Blogs from "../pages/Blogs";
import DoctorDetails from "../pages/DoctorDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        hydrateFallbackElement: <p>Loading, Please wait...</p>,
        loader: () => fetch("../doctors.json"),
      },
      {
        path: "/my-books",
        element: <MyBooks />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        hydrateFallbackElement: <p>Loading, Please wait...</p>,
        loader: () => fetch("../blogs.json"),
      },
      {
        path: "/doctor-details/:tabriz",
        element: <DoctorDetails />,
        hydrateFallbackElement: <p>Loading, Please wait...</p>,
        loader: () => fetch("../doctors.json"),
      },
    ],
  },
]);

export default router;
