import { pathSum } from "./437-path-sum";

describe("Path Sum III", () => {
  test("Case 1", () => {
    const root = {
      val: 10,
      left: {
        val: 5,
        left: {
          val: 3,
          left: {
            val: 3,
            left: null,
            right: null,
          },
          right: {
            val: -2,
            left: null,
            right: null,
          },
        },
        right: {
          val: 2,
          left: null,
          right: {
            val: 1,
            left: null,
            right: null,
          },
        },
      },
      right: {
        val: -3,
        left: null,
        right: {
          val: 11,
          left: null,
          right: null,
        },
      },
    };
    const targetSum = 8;
    const expected = 3;
    expect(pathSum(root, targetSum)).toBe(expected);
  });

  test("Case 2", () => {
    const root = {
      val: 5,
      left: {
        val: 4,
        left: {
          val: 11,
          left: {
            val: 7,
            left: null,
            right: null,
          },
          right: {
            val: 2,
            left: null,
            right: null,
          },
        },
        right: null,
      },
      right: {
        val: 8,
        left: {
          val: 13,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: {
            val: 5,
            left: null,
            right: null,
          },
          right: {
            val: 1,
            left: null,
            right: null,
          },
        },
      },
    };
    const targetSum = 22;
    const expected = 3;
    expect(pathSum(root, targetSum)).toBe(expected);
  });
});
