import longestSubarray from "./1493.longest-subarray-of-1s-after-deleting-one-element";

test("Case 1", () => {
  expect(longestSubarray([1, 1, 0, 1])).toBe(3);
});

test("Case 2", () => {
  expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toBe(5);
});

test("Case 3", () => {
  expect(longestSubarray([1, 1, 1])).toBe(2);
});
