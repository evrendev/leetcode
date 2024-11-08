/**
 * Calculates the n-th Tribonacci number.
 * @param {number} n - The index of the Tribonacci number to calculate.
 * @return {number} - The n-th Tribonacci number.
 */
const tribonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let first = 0;
  let second = 1;
  let third = 1;
  let next = 0;

  for (let i = 3; i <= n; i++) {
    next = first + second + third;
    first = second;
    second = third;
    third = next;
  }

  return next;
};

export { tribonacci };
