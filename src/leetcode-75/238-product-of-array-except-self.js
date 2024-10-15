/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (numbers) => {
  let totalProduct = 1;
  let zeroCount = 0;
  let zeroIndex = -1;

  numbers.forEach((val, i) => {
    if (val === 0) {
      zeroCount += 1;
      zeroIndex = i;
    } else {
      totalProduct *= val;
    }
  });

  if (zeroCount > 1) {
    return numbers.fill(0);
  }

  if (zeroCount === 1) {
    const result = numbers.fill(0);
    result[zeroIndex] = totalProduct;
    return result;
  }

  return numbers.map((val) => totalProduct / val);
};

export default productExceptSelf;
