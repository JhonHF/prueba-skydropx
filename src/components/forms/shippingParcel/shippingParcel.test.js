import React from "react";
import { Provider } from "react-redux";
import { act, render } from "@testing-library/react";
import { applicationStore } from "../../../store";
import { parcelFieldsList } from "./fieldList";
import { ShippingParcel } from ".";
import userEvent from "@testing-library/user-event";

describe("Test cases with ShippingParcel", () => {
  it("Should render at least one shipping parcel field", () => {
    const { getByLabelText } = render(
      <Provider store={applicationStore}>
        <ShippingParcel />
      </Provider>
    );

    const field = getByLabelText(parcelFieldsList[0].label);

    expect(field).toBeDefined();
  });

  it("Should show and error if a required field is empty", async () => {
    const { getByLabelText, getAllByText } = render(
      <Provider store={applicationStore}>
        <ShippingParcel />
      </Provider>
    );

    const requiredField = getByLabelText(parcelFieldsList[1].label);
    await act(async () => {
      await userEvent.click(requiredField);
      await userEvent.type(requiredField, "1234");
      await userEvent.keyboard("{Backspace>4/}");
    });

    const errorMessage = getAllByText("Este campo es requerido");
    expect(errorMessage[0]).toBeDefined();
  });
  
});
