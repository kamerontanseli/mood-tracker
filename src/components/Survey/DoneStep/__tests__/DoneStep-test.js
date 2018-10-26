import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import DoneStep from "..";

jest.mock("react-router-dom", () => ({
  Link: p => <a {...p} />
}));

describe("DoneStep", () => {
  it("should render", () => {
    const snapshot = renderer.create(<DoneStep />);
    expect(snapshot).toMatchSnapshot();
  });
});
