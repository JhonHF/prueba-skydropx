import React from "react";
import { Provider } from "react-redux";
import { act, fireEvent, render } from "@testing-library/react";
import { applicationStore } from "../../../store";
import { ShippingParcel } from ".";
import { parcelFieldsList } from "./fieldList";
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

/*   it("Should render error if an input is focused", async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={applicationStore}>
        <ShippingParcel />
      </Provider>
    );

    const field = getByLabelText(parcelFieldsList[3].label);
    fireEvent.focusIn(field);
    fireEvent.blur(field);
    await act(async () => {
        const errorMessage = getByText(/este campo es requerido/i);
        expect(errorMessage).toBeDefined();
    });
  });
}); */
