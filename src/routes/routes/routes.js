import { createBrowserRouter } from "react-router-dom";
import Admin from "../../layout/Admin/Admin";
import User from "../../layout/User/User";
import AdminHome from "../../pages/AdminHome/AdminHome";
import ShowBlogs from "../../pages/AdminHome/ShowBlogs/ShowBlogs";
import History from "../../pages/History/History";
import Details from "../../pages/Home/Details/Details";
import Home from "../../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User></User>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
      {
        path: "/history",
        element: <History></History>,
      },
    ],
  },
  {
    path: "/admin/",
    element: <Admin></Admin>,
    children: [
      {
        path: "/admin/",
        element: <ShowBlogs></ShowBlogs>,
        // children: [
        //   {
        //     path: "/admin/",
        //     element: <ShowBlogs></ShowBlogs>,
        //   },
        // ],
      },
    ],
  },
]);
export default router;
