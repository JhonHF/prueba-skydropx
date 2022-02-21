import React from "react";
import { CardWrapper } from "./styles";

export const Card = ({ children, selected, className, ...props }) => (
  <CardWrapper
    className={`card ${className || ""}`}
    selected={selected}
    id="card"
    {...props}
  >
    <div className="card-body">{children}</div>
  </CardWrapper>
);
