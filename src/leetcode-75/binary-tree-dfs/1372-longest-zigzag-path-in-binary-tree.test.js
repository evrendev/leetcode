import { longestZigZag } from "./1372-longest-zigzag-path-in-binary-tree.js";

describe("Longest ZigZag Path in a Binary Tree", () => {
  test("Case 1", () => {
    const root = {
      val: 1,
      left: {
        val: 1,
        left: null,
        right: {
          val: 1,
          left: {
            val: 1,
            left: null,
            right: {
              val: 1,
              left: null,
              right: null,
            },
          },
          right: null,
        },
      },
      right: {
        val: 1,
        left: {
          val: 1,
          left: {
            val: 1,
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          val: 1,
          left: null,
          right: {
            val: 1,
            left: null,
            right: {
              val: 1,
              left: null,
              right: null,
            },
          },
        },
      },
    };

    expect(longestZigZag(root)).toBe(4);
  });
});
