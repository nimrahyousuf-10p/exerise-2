import React from "react";
import { shallow } from "enzyme";
import EnzymeConfig from "../../../enzyme-config";
import Home from "./index";

describe("Navigation component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  it("should render Home component", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
