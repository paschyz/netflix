import { Outlet, createBrowserRouter } from "react-router-dom";
import Profiles from "./Profiles";
import Home from "./Home";
export default createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index:true,
        element: <Profiles />,
      },
      {
        path: "/home",
        element: <Home />,
      },

    ],
  },
]);
