/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
  const n = cost.length;
  if (n === 0) return 0;
  if (n === 1) return cost[0];

  let prev1 = 0;
  let prev2 = 0;

  for (let i = 2; i <= n; i++) {
    const current = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
};

export { minCostClimbingStairs };
