/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (array) => {
  let totalProduct = 1;
  let zeroCount = 0;
  let zeroIndex = -1;

  array.forEach((val, i) => {
    if (val === 0) {
      zeroCount += 1;
      zeroIndex = i;
    } else {
      totalProduct *= val;
    }
  });

  if (zeroCount > 1) {
    return array.fill(0);
  }

  if (zeroCount === 1) {
    const result = array.fill(0);
    result[zeroIndex] = totalProduct;
    return result;
  }

  return array.map((val) => totalProduct / val);
};

export default productExceptSelf;
