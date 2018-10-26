import fs from "fs";
import { renderAppToString, insertComponent, renderApp } from "../ssr";

describe("renderAppToString", () => {
  it("should return a string", () => {
    expect(typeof renderAppToString("/")).toBe("string");
  });
});

describe("insertComponent", () => {
  it('should insert html into <div id="app"></div>', () => {
    const html = '<div id="app"></div>';
    expect(insertComponent(html, "<test />")).toBe(
      '<div id="app"><test /></div>'
    );
  });
});

describe("renderApp", () => {
  it("should throw when fs.readFile fails", () => {
    const api = jest
      .spyOn(fs, "readFile")
      .mockImplementation((file, type, cb) => cb(new Error("AHHHH")));
    expect(() => renderApp()).toThrow();
    api.mockRestore();
  });
  it("should call res.send with the result of renderAppToString()", () => {
    const html = '<div id="app"></div>';
    const spy = jest.fn(result =>
      expect(result).toBe(insertComponent(html, renderAppToString({})))
    );
    const api = jest
      .spyOn(fs, "readFile")
      .mockImplementation((file, type, cb) => cb(null, html));
    renderApp({}, { send: spy });
    api.mockRestore();
    expect(spy).toHaveBeenCalled()
  });
});
