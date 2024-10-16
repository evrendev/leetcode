/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let zeroCount = nums.filter((num) => num === 0).length;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      index--;
    }
  }

  nums.push(...Array(zeroCount).fill(0));
};

export default moveZeroes;
