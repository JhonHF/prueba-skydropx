import React from "react";
import { CardWrapper } from "./styles";

export const Card = ({ children, selected, className }) => (
  <CardWrapper
    className={`card ${className || ""}`}
    selected={selected}
    id="card"
  >
    <div className="card-body">{children}</div>
  </CardWrapper>
);
