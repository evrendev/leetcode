import maxProfit from "./best-time-to-buy-and-sell-stock-ii";

test("Case 1", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
});

test("Case 2", () => {
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
});
