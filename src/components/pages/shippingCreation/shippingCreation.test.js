import React from "react";
import { Provider } from "react-redux";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { applicationStore } from "../../../store";
import { ShippingCreation } from ".";
import {
  commonFields,
  shipToExtraFields,
} from "../../forms/shippingAddress/fieldList";
import { BrowserRouter } from "react-router-dom";

describe("Test cases with ShippingCreation", () => {
  it("Should render shipTo fields when role is shipper, required fields are filled and nextstep button is pressed", async () => {
    const { getByLabelText, getByText, unmount } = render(
      <BrowserRouter>
        <Provider store={applicationStore}>
          <ShippingCreation />
        </Provider>
      </BrowserRouter>
    );

    const zipField = getByLabelText(commonFields[3].label);
    const submitButton = getByText("Siguiente");

    await act(async () => {
      await userEvent.click(zipField);
      await userEvent.type(zipField, "1234");
      await userEvent.click(submitButton);
    });

    const shipToField = getByLabelText(shipToExtraFields[0].label);

    expect(shipToField).toBeInTheDocument();

    unmount();
  });

  it("Should view stored shipper data when form is submmited and go to next step, then go back", async () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <Provider store={applicationStore}>
          <ShippingCreation />
        </Provider>
      </BrowserRouter>
    );

    await act(async () => {
      const submitButton = getByText("Siguiente");
      const zipField = getByLabelText(commonFields[3].label);
      await userEvent.click(zipField);
      await userEvent.type(zipField, "12345");
      await userEvent.click(submitButton);
    });

    await act(async () => {
      const returnButton = getByText("Volver");
      await userEvent.click(returnButton);
    });

    expect(getByLabelText(commonFields[3].label)).toHaveAttribute(
      "value",
      "12345"
    );
  });
});
