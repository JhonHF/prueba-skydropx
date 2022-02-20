import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledItem } from "./styles";

export const NavItem = ({ label, route }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => navigate(route);
  const activeNavLink = route === pathname ? "active" : "";

  return (
    <StyledItem className="nav-item">
      <span className={`nav-link ${activeNavLink}`} onClick={handleClick}>
        {label}
      </span>
    </StyledItem>
  );
};
