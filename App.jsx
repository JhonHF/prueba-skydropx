import React from "react";
import axios from "axios";
import { applyInterceptors } from "./src/services/interceptors";
import { AppRoutes } from "./src/routes";

axios.interceptors.request.use(applyInterceptors);

export const App = () => <AppRoutes />;
