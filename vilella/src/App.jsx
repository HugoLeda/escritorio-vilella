import * as React from "react";
import { RouterProvider } from "react-router-dom";

import GlobalStyles from "./styles/global";

import Router from "./routes";
import { ThemeProvider } from "styled-components";

function App() { 
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={Router} />      
    </>
  );
}

export default App;