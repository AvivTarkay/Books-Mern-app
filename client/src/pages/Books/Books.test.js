import React from "react";
import { shallow } from "enzyme";
import Books from "./Books";

describe("Books", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Books />);
    expect(wrapper).toMatchSnapshot();
  });
});
