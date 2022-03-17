import React from "react";
import userEvent from "@testing-library/user-event";
import { render, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { commonFields, shipToExtraFields } from "./fieldList";
import { applicationStore } from "../../../store";
import { ShippingAddress } from ".";

describe("Test cases with ShippingAddress", () => {
  it("Should render at least one common field", () => {
    const { getByLabelText } = render(
      <Provider store={applicationStore}>
        <ShippingAddress handleSubmit={() => {}} />
      </Provider>
    );

    const field = getByLabelText(commonFields[0].label);
    expect(field).toBeDefined();
  });

  it("Should render at least one shipTo extra field if role is shipTo", () => {
    const { getByLabelText } = render(
      <Provider store={applicationStore}>
        <ShippingAddress role="shipTo" handleSubmit={() => {}} />
      </Provider>
    );

    const field = getByLabelText(shipToExtraFields[0].label);
    expect(field).toBeDefined();
  });

/*   it("Should show and error if a required field is empty", async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={applicationStore}>
        <ShippingAddress role="shipTo" handleSubmit={() => {}} />
      </Provider>
    );

    
    await act(async () => {
      const requiredField = getByLabelText(commonFields[3].label);
      await userEvent.click(requiredField);
      await userEvent.type(requiredField, "1234");
      await userEvent.keyboard("{Backspace>4/}"); 
      console.log(requiredField)
    });

    const errorMessage = getByText("Este campo es requerido");
    expect(errorMessage).toBeDefined();
  }); */
});
