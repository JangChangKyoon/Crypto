import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "black",
};

const lightTheme = {
  textColor: "black",
  backgroundColor: "whitesmoke",
};

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
