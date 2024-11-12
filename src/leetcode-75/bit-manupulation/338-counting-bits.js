/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i.toString(2).replace(/0/g, "").length);
  }

  return result;
};

export { countBits };
