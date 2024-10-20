import largestAltitude from "./1732-find-the-highest-altitude";

test("Case 1", () => {
  expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1);
});

test("Case 2", () => {
  expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
});
