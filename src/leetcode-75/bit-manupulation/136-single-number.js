/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  return nums.reduce((acc, num) => acc ^ num, 0);
};

export { singleNumber };
