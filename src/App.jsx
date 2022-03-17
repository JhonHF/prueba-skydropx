import React from "react";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applicationStore } from "./store";
import { AppRoutes } from "./routes";
import { applyInterceptors } from "./services/interceptors";
import "bootstrap/dist/css/bootstrap.min.css";

axios.interceptors.request.use(applyInterceptors);

export const App = () => (
  <Provider store={applicationStore}>
    <AppRoutes />
  </Provider>
);
