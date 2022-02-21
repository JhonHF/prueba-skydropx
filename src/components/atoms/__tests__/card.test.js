import React from "react";
import { shallow } from "enzyme";

import { Card } from "../card";

describe("Card component", () => {
  describe("GIVEN a set of valid props", () => {
    const testProps = {
      className: "p-3",
      children: <p>Children</p>,
      selected: false,
      onClick: jest.fn(),
    };

    describe("WHEN the component is rendered without props", () => {
      const shallowWrapper = shallow(<Card {...testProps} />);

      it("THEN should display a regular AddPrestation", () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });

    describe("WHEN the card is selected", () => {
      const customProps = {
        ...testProps,
        selected: true,
      };

      const shallowWrapper = shallow(<Card {...customProps} />);

      it("THEN the onClick function is called", () => {
        expect(shallowWrapper.find("p").html()).toEqual("<p>Children</p>");
      });
    });
  });
});
