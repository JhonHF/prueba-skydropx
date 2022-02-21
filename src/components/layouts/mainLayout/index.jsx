import React from "react";
import { NavBar } from "../../molecules/navbar";
import { LayoutWrapper } from "./styles";

export const MainLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <header>
        <NavBar />
      </header>
      <section className="section_content">{children}</section>
    </LayoutWrapper>
  );
};
