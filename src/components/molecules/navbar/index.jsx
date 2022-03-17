import React, { useState } from "react";
import { NavItem } from "../../atoms/navLink";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const showClass = showMenu ? "show" : "";
  const brandLogoUrl =
    "https://www.skydropx.com/assets/landing5/skydropx_logo-4fb27c0601c3bccddd15cad09e612eb0d777dcdbcebae56c0382a8fe2978dfa9.svg";

  return (
    <nav className="navbar navbar-expand-xl navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-brand">
          <img src={brandLogoUrl} height="30" alt="logo skydropx" />
        </span>
        <div className={`collapse navbar-collapse ${showClass}`}>
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <NavItem route="/" label="Crear envio" />
          </ul>
        </div>
      </div>
    </nav>
  );
};
