import uniqueOccurrences from "./1207-unique-number-of-occurrences";

test("Case 1", () => {
  expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true);
});

test("Case 2", () => {
  expect(uniqueOccurrences([1, 2])).toBe(false);
});

test("Case 3", () => {
  expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true);
});
