import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Home } from ".";

describe("Tests case with Home", () => {
  it("Should render to button", () => {
    const { getByTestId } = render(<Home />);

    const button = getByTestId("switch_button");
    expect(button).toBeDefined();
  });

  it("Should call to button", () => {
    const { getByTestId } = render(<Home />);

    const button = getByTestId("switch_button");
    expect(button.textContent).toBe("Ocultar detalles");

    fireEvent.click(button);
    expect(button.textContent).toBe("Mostrar detalles");
  });
});
