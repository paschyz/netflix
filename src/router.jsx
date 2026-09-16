import { Outlet, createHashRouter } from "react-router-dom";
import Profiles from "./Profiles";
import Home from "./Home";
export default createHashRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Profiles />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
