import { maxLevelSum } from "./1161-maximum-level-sum-of-a-binary-tree";

describe("Maximum Level Sum of a Binary Tree", () => {
  test("Case 1", () => {
    const root = {
      val: 1,
      left: {
        val: 7,
        left: {
          val: 7,
        },
        right: {
          val: -8,
        },
      },
      right: {
        val: 0,
      },
    };

    expect(maxLevelSum(root)).toBe(2);
  });

  test("Case 2", () => {
    const root = {
      val: 989,
      left: {
        val: 10250,
        left: {
          val: 98693,
          left: {
            val: -89388,
            left: {
              val: -32127,
            },
            right: {
              val: -66821,
            },
          },
          right: {
            val: -11056,
            left: {
              val: 7580,
            },
            right: {
              val: -51561,
            },
          },
        },
        right: {
          val: -89388,
          left: {
            val: -32127,
          },
          right: {
            val: -66821,
          },
        },
      },
      right: {
        val: 11056,
        left: {
          val: 7580,
        },
        right: {
          val: -51561,
        },
      },
    };

    expect(maxLevelSum(root)).toBe(2);
  });

  test("Case 3", () => {
    const root = {
      val: 1,
    };

    expect(maxLevelSum(root)).toBe(1);
  });

  test("Case 4", () => {
    const root = null;

    expect(maxLevelSum(root)).toBe(0);
  });
});
