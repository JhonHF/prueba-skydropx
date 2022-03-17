import React from "react";
import { Routes, Route } from "react-router-dom";
import { ShippingCreation } from "../components/pages/shippingCreation";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ShippingCreation />} />
  </Routes>
);
