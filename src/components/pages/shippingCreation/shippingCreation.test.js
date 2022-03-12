   /*  
   import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render, act, wai } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { applicationStore } from "../../../store";
import { ShippingCreation } from ".";
import { shipToExtraFields } from "../../forms/shippingAddress/fieldList";

import "@testing-library/jest-dom";
const AllTheProviders = ({ children }) => {
  const history = createMemoryHistory();
  return (
    <Router history={history}>
      <Provider store={applicationStore}>{children}</Provider>
    </Router>
  );
};
const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });
describe("Test cases with ShippingCreation", () => {
  it("Should render shipTo fields when role is shipper and nextstep button is pressed", async () => {
    const { getByText, getByLabelText, container } = customRender(
      <ShippingCreation />
    );

    const nextButton = getByText("Siguiente");
    await act(async () => {
      userEvent.click(nextButton);
      console.log(container.children);
         const field = getByLabelText(shipToExtraFields[0].label);
      expect(field).toBeDefined(); 
    });
  });
});*/
