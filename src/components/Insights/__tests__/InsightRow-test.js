import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import InsightRow from "../InsightRow";
import AccordionToggle from "../../general/Accordion/AccordionToggle";
import AccordionBody from "../../general/Accordion/AccordionBody";

describe("render", () => {
  it("should render", () => {
    const snapshot = renderer.create(
      <InsightRow
        insight={{
          mood: 5,
          feelings: ["optimistic", "happy"],
          comment: "wdqwdwdqdw",
          date: 1540507773565
        }}
      />
    );
    expect(snapshot).toMatchSnapshot();
  });
  it("should show AccordionBody when AccordionToggle is clicked", () => {
    const wrapper = mount(
      <InsightRow
        insight={{
          mood: 5,
          feelings: ["optimistic", "happy"],
          comment: "wdqwdwdqdw",
          date: 1540507773565
        }}
      />
    );
    wrapper.find(AccordionToggle).simulate('click')
    wrapper.update()
    expect(wrapper.find(AccordionBody).exists()).toBe(true)
  });
});
