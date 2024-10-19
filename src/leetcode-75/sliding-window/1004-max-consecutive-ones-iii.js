/**
 * @param {number[]} nums - The binary array
 * @param {number} k - The maximum number of 0's we can flip
 * @return {number} - The maximum number of consecutive 1's
 */
const longestOnes = (nums, k) => {
  let left = 0;
  let right = 0;
  let max = 0;
  let zeroCount = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    max = Math.max(max, right - left + 1);
    right++;
  }

  return max;
};

export default longestOnes;
