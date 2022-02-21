import React from "react";
import { Button } from "../../atoms/button";
import { StepperWrapper } from "./styles";

export const FormStepper = ({ listOptions }) => {
  return (
    <StepperWrapper>
      {listOptions.map(({ label, ...buttonProps }, index) => (
        <Button className="btn-lg button" {...buttonProps} key={index}>
          {label}
        </Button>
      ))}
    </StepperWrapper>
  );
};
