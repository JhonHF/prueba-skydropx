import React from "react";
import { Home } from "../components/pages/home";
import { ShippingCreation } from "../components/pages/shippingCreation";

export const listRoutes = [
  {
    label: "Home",
    path: "/",
    component: <Home/>,
  },
  {
    label: "Crear envio",
    path: "/shipments/creation",
    component: <ShippingCreation/>,
  },
  {
    label: "Lista de envios",
    path: "/shipments/list",
    component: <h1>Lista de envios</h1>,
  },
];
