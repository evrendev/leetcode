/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function (nums) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    } else if (nums[i] <= second) {
      second = nums[i];
    } else {
      return true;
    }
  }

  return false;
};

export default increasingTriplet;
