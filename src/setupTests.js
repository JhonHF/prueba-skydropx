/* import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure } from "enzyme";
import { createSerializer } from "enzyme-to-json";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
 */

import "@testing-library/jest-dom/extend-expect"