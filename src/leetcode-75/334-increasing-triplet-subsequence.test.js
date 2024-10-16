import increasingTriplet from "./334-increasing-triplet-subsequence";

test("Case 1", () => {
  expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
});

test("Case 2", () => {
  expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
});

test("Case 3", () => {
  expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBe(true);
});
