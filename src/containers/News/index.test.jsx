import React from "react";
import { shallow } from "enzyme";
import EnzymeConfig from "../../../enzyme-config";
import News from "./index";

describe("News component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<News />);
  });
  it("should render News component", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("should contain input field", () => {
    // const input = mount(<Input />);
    // expect(input).toEqual("Enter text ...");
  });
});
