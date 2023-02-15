import { createBrowserRouter } from "react-router-dom";
import User from "../../layout/User/User";
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
    ],
  },
]);
export default router;
