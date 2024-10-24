/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  let sum = 0;
  let max;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (i >= k - 1) {
      if (max === undefined) {
        max = sum;
      } else {
        max = Math.max(max, sum);
      }

      sum -= nums[i - k + 1];
    }
  }

  return max / k;
};

export default findMaxAverage;
