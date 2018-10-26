import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

jest.mock("react-router-dom", () => ({
  Switch: p => <div className="switch" {...p} />,
  Route: p => <div className="route" {...p} />
}));

describe("render", () => {
  it("should render", () => {
    const snapshot = renderer.create(<App />);
    expect(snapshot).toMatchSnapshot();
  });
});
