import React from "react";
import { NavBar } from "../../molecules/navbar";
import { StyledSection } from "./styles";

export const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <StyledSection>{children}</StyledSection>
    </>
  );
};
