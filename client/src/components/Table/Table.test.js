import React from "react";
import { shallow } from "enzyme";
import TableComponent from "./Table";

describe("Table", () => {
	test("matches snapshot", () => {
		const wrapper = shallow(<TableComponent />);
		expect(wrapper).toMatchSnapshot();
	});
});
