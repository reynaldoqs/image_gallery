import React from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Home path="/" />
          <Detail path="/detail" />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
