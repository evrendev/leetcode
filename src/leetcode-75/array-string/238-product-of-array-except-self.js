/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const n = nums.length;
  const left = new Array(n).fill(1);
  const right = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
    right[n - i - 1] = right[n - i] * nums[n - i];
  }

  return nums.map((num, index) => left[index] * right[index]);
};

export default productExceptSelf;
