import moveZeroes from "./283-move-zeroes";

test("Case 1", () => {
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).toStrictEqual([1, 3, 12, 0, 0]);
});

test("Case 2", () => {
  const nums = [0];
  moveZeroes(nums);
  expect(nums).toStrictEqual([0]);
});

test("Case 3", () => {
  const nums = [0, 0, 1];
  moveZeroes(nums);
  expect(nums).toStrictEqual([1, 0, 0]);
});
