/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let max = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const width = right - left;
    max = Math.max(max, minHeight * width);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

export default maxArea;
