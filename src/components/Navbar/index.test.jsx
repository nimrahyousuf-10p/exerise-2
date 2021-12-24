import React from "react";
import { shallow } from "enzyme";
import EnzymeConfig from "../../../enzyme-config";
import Navigation from "./index";

describe("Navigation component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });
  it("should render navigation component", () => {
    wrapper = shallow(<Navigation />);
  });
  it("should have navbar", () => {
    expect(wrapper.find("#nav")).toHaveLength(1);
  });
  it("home should appear on navbar", () => {
    const link = wrapper.find("#nav1").text();
    expect(link).toEqual("Home");
  });
  it("news should appear on navbar", () => {
    const link = wrapper.find("#nav2").text();
    expect(link).toEqual("News");
  });
});
