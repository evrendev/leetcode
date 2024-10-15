import kidsWithCandies from "./1431-kids-with-the-greatest-number-of-candies";

test("Case 1", () => {
  const candies = [2, 3, 5, 1, 3];
  const extraCandies = 3;
  const result = kidsWithCandies(candies, extraCandies);
  expect(result).toStrictEqual([true, true, true, false, true]);
});

test("Case 2", () => {
  const candies = [4, 2, 1, 1, 2];
  const extraCandies = 1;
  const result = kidsWithCandies(candies, extraCandies);
  expect(result).toStrictEqual([true, false, false, false, false]);
});

test("Case 3", () => {
  const candies = [12, 1, 12];
  const extraCandies = 10;
  const result = kidsWithCandies(candies, extraCandies);
  expect(result).toStrictEqual([true, false, true]);
});
