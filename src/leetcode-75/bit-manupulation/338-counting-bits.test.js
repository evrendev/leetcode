import { countBits } from "./338-counting-bits";

describe("Counting Bits", () => {
  it("2", () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });

  it("5", () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });
});
