import React from "react";
import { shallow } from "enzyme";
import Unfold from "./Unfold";

describe("Unfold", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Unfold />);
    expect(wrapper).toMatchSnapshot();
  });
});
