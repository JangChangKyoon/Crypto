import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { ligntTheme } from "./theme";

ReactDOM.render(
  <ThemeProvider theme={ligntTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
