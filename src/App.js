import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";

const GlobalSTyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-image: linear-gradient(#041833, #154580);
  }
`;

const App = () => (
  <>
    <GlobalSTyle />
    <Home />
  </>
);

export default App;
