import canPlaceFlowers from "./04-can-place-flowers";

test("Case 1", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
});

test("Case 2", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
});
