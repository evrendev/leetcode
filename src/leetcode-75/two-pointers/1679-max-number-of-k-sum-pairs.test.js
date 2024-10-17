import maxOperations from "./1679-max-number-of-k-sum-pairs";

test("Case 1", () => {
  const nums = [1, 2, 3, 4];
  const k = 5;

  expect(maxOperations(nums, k)).toBe(2);
});

test("Case 2", () => {
  const nums = [3, 1, 3, 4, 3];
  const k = 6;

  expect(maxOperations(nums, k)).toBe(1);
});
