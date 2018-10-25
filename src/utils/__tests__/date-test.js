import { getMonth } from "../date";

describe("getMonth", () => {
  it("should return the correct month name", () => {
    const results = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    results.forEach((result, index) => {
      expect(getMonth(index)).toBe(result)
    })
  });
});
