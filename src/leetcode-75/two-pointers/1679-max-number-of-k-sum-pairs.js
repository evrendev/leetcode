/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
  const map = {};
  let result = 0;

  nums.forEach((num) => {
    const diff = k - num;

    if (map[diff]) {
      result++;
      map[diff]--;
    } else {
      map[num] = (map[num] || 0) + 1;
    }
  });

  return result;
};

export default maxOperations;
