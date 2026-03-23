import * as React from "react";
import { RouterProvider } from "react-router-dom";

import GlobalStyles from "./styles/global";

import Router from "./routes";
import { ThemeProvider } from "styled-components";
import Cookies from "./components/Cookies";
import FloatButton from "./components/FloatButton";

function App() { 
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={Router} />    
      <Cookies/>
      <FloatButton/>
    </>
  );
}

export default App;