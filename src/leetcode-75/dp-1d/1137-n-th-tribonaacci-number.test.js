import { tribonacci } from "./1137-n-th-tribonaacci-number";

describe("N-th Tribonacci Number", () => {
  test("Case 1", () => {
    expect(tribonacci(4)).toBe(4);
  });

  test("Case 2", () => {
    expect(tribonacci(25)).toBe(1389537);
  });

  test("Case 3", () => {
    expect(tribonacci(0)).toBe(0);
  });

  test("Case 4", () => {
    expect(tribonacci(1)).toBe(1);
  });

  test("Case 5", () => {
    expect(tribonacci(2)).toBe(1);
  });
});
