import { createBrowserRouter} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Building from "./pages/Bulding";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,    
  },
  {
    path: "/about",
    element: <Building />,
  },
  {
    path: "/services",
    element: <Building />,
  },
  {
    path: "/team",
    element: <Building />,
  },
  {
    path: "/lgpd",
    element: <Building />,
  },
  {
    path: "/client-center",
    element: <Building />,
  },
  {
    path: "*",
    element: <Page404 />
  }
]);

export default Router;