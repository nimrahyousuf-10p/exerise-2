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
});
