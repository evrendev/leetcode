/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
  const arr1 = [...new Set(nums1.filter((num) => !nums2.includes(num)))];
  const arr2 = [...new Set(nums2.filter((num) => !nums1.includes(num)))];

  return [arr1, arr2];
};

export default findDifference;
