import findMaxAverage from "./643-maximum-average-subarray-i";

test("Case 1", () => {
  const nums = [1, 12, -5, -6, 50, 3];
  const k = 4;
  const expected = 12.75;
  expect(findMaxAverage(nums, k)).toBe(expected);
});

test("Case 2", () => {
  const nums = [5];
  const k = 1;
  const expected = 5;
  expect(findMaxAverage(nums, k)).toBe(expected);
});
