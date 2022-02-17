import React from "react";
import { Routes, Route } from "react-router-dom";
import { listRoutes } from "./listRoutes";

export const AppRoutes = () => (
  <Routes>
    {listRoutes.map((routeItem, index) => (
      <Route path={routeItem.path} element={routeItem.component} key={index} />
    ))}
  </Routes>
);
