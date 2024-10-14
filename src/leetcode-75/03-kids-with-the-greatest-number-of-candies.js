/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
  return candies.map((candy) => candy + extraCandies >= Math.max(...candies));
};

export default kidsWithCandies;
