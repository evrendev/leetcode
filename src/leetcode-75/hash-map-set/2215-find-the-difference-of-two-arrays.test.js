import findDifference from "./2215-find-the-difference-of-two-arrays";

test("Case 1", () => {
  expect(findDifference([1, 2, 3], [2, 4, 6])).toEqual([
    [1, 3],
    [4, 6],
  ]);
});

test("Case 2", () => {
  expect(findDifference([1, 2, 3, 3], [1, 1, 2, 2])).toEqual([[3], []]);
});
