import { minCostClimbingStairs } from "./746-min-cost-climbing-stairs";

describe("Min cost climbing stairs", () => {
  test("Case 1", () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
  });

  test("Case 2", () => {
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
  });
});
