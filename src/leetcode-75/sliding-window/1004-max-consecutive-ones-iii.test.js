import longestOnes from "./1004-max-consecutive-ones-iii";

test("Case 1", () => {
  expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
});

test("Case 2", () => {
  expect(
    longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
  ).toBe(10);
});