import { equalPairs } from "./2352-equal-row-and-column-pairs";

describe("Case 1", () => {
  test("Example 1", () => {
    expect(
      equalPairs([
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
      ])
    ).toBe(1);
  });
});

describe("Case 2", () => {
  test("Example 1", () => {
    expect(
      equalPairs([
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2],
      ])
    ).toBe(3);
  });
});