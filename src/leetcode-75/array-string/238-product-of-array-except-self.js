/**
 * // My solution link: https://leetcode.com/problems/product-of-array-except-self/solutions/5930990/optimizing-product-of-array-except-self-without-division-in-o-n-time
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

  return nums.map((num, index) =>
    Object.is(left[index] * right[index], -0) ? 0 : left[index] * right[index]
  );
};

export default productExceptSelf;
