import React from "react";
import { MainLayout } from "../components/layouts/mainLayout";

export const listRoutes = [
  {
    label: "Home",
    path: "/",
    component: <MainLayout />,
  },
  {
    label: "Crear envio",
    path: "/shipments/creation",
    component: <h1>Creacion de envio</h1>,
  },
  {
    label: "Lista de envios",
    path: "/shipments/list",
    component: <h1>Lista de envios</h1>,
  },
];
