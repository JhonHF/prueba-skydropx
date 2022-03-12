import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render } from "@testing-library/react";
import { applicationStore } from "../../../store";
import { ShippingAddress } from ".";
import { commonFields, shipToExtraFields } from "./fieldList";
describe("Test cases with ShippingAddress", () => {
  it("Should render at least one common field", () => {
    const { getByLabelText } = render(
      <Provider store={applicationStore}>
        <ShippingAddress />
      </Provider>
    );

    const field = getByLabelText(commonFields[0].label);
    expect(field).toBeDefined();
  });

  it("Should render at least one shipTo extra field if role is shipTo", () => {
    const { getByLabelText } = render(
      <Provider store={applicationStore}>
        <ShippingAddress role="shipTo" />
      </Provider>
    );

    const field = getByLabelText(shipToExtraFields[0].label);
    expect(field).toBeDefined();
  });

/*   it("Should shipper form be stored in redux when form is submitted and rol is shipper", () => {
    const { getByLabelText } = render(
      <Provider store={applicationStore}>
        <ShippingAddress role="shipper" />
      </Provider>
    );
    const zipField = getByLabelText(commonFields[3].label);

    fireEvent.

  }); */
});
