import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "core-js/stable";
import { App } from "./App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
