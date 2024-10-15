import productExceptSelf from "./07-product-of-array-except-self";

test("Case 1", () => {
  const nums = [1, 2, 3, 4];
  const result = productExceptSelf(nums);
  expect(result).toStrictEqual([24, 12, 8, 6]);
});

test("Case 2", () => {
  const nums = [-1, 1, 0, -3, 3];
  const result = productExceptSelf(nums);
  expect(result).toStrictEqual([0, 0, 9, 0, 0]);
});
