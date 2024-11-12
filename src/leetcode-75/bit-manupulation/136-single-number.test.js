import { singleNumber } from "./136-single-number";

describe("Single Number", () => {
  it("Case 1", () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  it("Case 2", () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });

  it("Case 3", () => {
    expect(singleNumber([1])).toBe(1);
  });
});
