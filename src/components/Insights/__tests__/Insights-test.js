import "isomorphic-fetch";
import React from "react";
import { shallow, mount } from "enzyme";
import Insights from "..";
import InsightTotal from "../InsightTotal";
import InsightRow from "../InsightRow";

jest.mock("react-router-dom", () => ({
  Link: p => <a {...p} />
}));

describe("fetchData", () => {
  it("should set the response of the fetch to state.insights", async () => {
    const api = jest.spyOn(window, "fetch").mockImplementation(
      () =>
        new Promise(r =>
          r({
            json: () => new Promise(r => r([{test: 123}]))
          })
        )
    );
    const wrapper = shallow(<Insights />)
    await wrapper.instance().fetchData()
    wrapper.update()
    expect(api).toHaveBeenCalled()
    expect(wrapper.state('insights')).toEqual([{test: 123}])
    api.mockRestore()
  });
});

describe("componentDidMount", () => {
  it("should call fetchData", () => {
    const wrapper = shallow(<Insights />);
    const api = jest
      .spyOn(wrapper.instance(), "fetchData")
      .mockImplementation(() => {});
    wrapper.instance().componentDidMount();
    expect(api).toHaveBeenCalled();
  });
});

describe("render", () => {
  it("should render loading", () => {
    const wrapper = mount(<Insights />);
    wrapper.setState({ loading: true });
    wrapper.update();
    expect(wrapper.find(".loading").exists()).toBeTruthy();
  });
  it("should render InsightTotal", () => {
    const wrapper = shallow(<Insights />);
    expect(wrapper.find(InsightTotal).exists()).toBeTruthy();
  });
  it("should render InsightRow for each insight", () => {
    const wrapper = shallow(<Insights />);
    wrapper.setState({
      insights: [
        {
          mood: 5,
          feelings: ["optimistic", "happy"],
          comment: "wdqwdwdqdw",
          date: 1540507773565
        },
        {
          mood: 3,
          feelings: ["optimistic", "happy"],
          comment: "wdqwdwdqdw",
          date: 1540507773565
        }
      ]
    });
    wrapper.update();
    expect(wrapper.find(InsightRow).length).toBe(2);
  });
});
