import React from "react";
import renderer from "react-test-renderer";
import NotFound from "../NotFound";

jest.mock("react-router-dom", () => ({
  Link: p => <a className="switch" {...p} />
}));

describe("render", () => {
  it("should render", () => {
    const snapshot = renderer.create(<NotFound />);
    expect(snapshot).toMatchSnapshot();
  });
});
