import React from "react";
import { shallow } from "enzyme";
import { FormikProvider } from "formik";

import { Input } from "../input";

describe("Input component", () => {
  describe("GIVEN a set of valid props", () => {
    const testProps = {
      name: "name",
      className: "form-control",
    };

    describe("WHEN the component is rendered without props", () => {
      const shallowWrapper = shallow(
        <FormikProvider>
          <Input {...testProps} />
        </FormikProvider>
      );

      it("THEN should display a regular AddPrestation", () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });

    describe("WHEN the card is selected", () => {
      const customProps = {
        ...testProps,
        label: "Label",
      };

      const shallowWrapper = shallow(
        <FormikProvider>
          <Input {...customProps} />
        </FormikProvider>
      );

      it("THEN the onClick function is called", () => {
        expect(shallowWrapper.find("Input").props().label).toEqual("Label");
      });
    });
  });
});
