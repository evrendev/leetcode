import pivotIndex from "./724-find-pivot-index";

test("Case 1", () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
});

test("Case 2", () => {
  expect(pivotIndex([1, 2, 3])).toBe(-1);
});

test("Case 3", () => {
  expect(pivotIndex([2, 1, -1])).toBe(0);
});
