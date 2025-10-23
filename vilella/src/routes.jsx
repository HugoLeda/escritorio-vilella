import { createBrowserRouter} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Building from "./pages/Bulding";
import Services from "./pages/Services";
import LGPD from "./pages/LGPD"
import Client from "./pages/Client"
import Policy from "./pages/Policy"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,    
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/team",
    element: <Building />,
  },
  {
    path: "/lgpd",
    element: <LGPD />,
  },
  {
    path: "/client-center",
    element: <Client />,
  },  
  {
    path: "/privacy-policy",
    element: <Policy />
  },  
  {
    path: "*",
    element: <Page404 />
  }
]);

export default Router;