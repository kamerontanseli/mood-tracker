import React from "react";
import renderer from "react-test-renderer";
import InsightTotal from "../InsightTotal";

describe("render", () => {
  it("should render", () => {
    const snapshot = renderer.create(
      <InsightTotal insights={[{ mood: 1 }, { mood: 2 }, { mood: 3 }]} />
    );
    expect(snapshot).toMatchSnapshot();
  });
});
