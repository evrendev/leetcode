import { lowestCommonAncestor } from "./236-lowest-common-ancestor-of-a-binary-tree";

describe("Lowest Common Ancestor of a Binary Tree", () => {
  test("Case 1", () => {
    const root = {
      val: 3,
      left: {
        val: 5,
        left: {
          val: 6,
          left: null,
          right: null,
        },
        right: {
          val: 2,
          left: {
            val: 7,
            left: null,
            right: null,
          },
          right: {
            val: 4,
            left: null,
            right: null,
          },
        },
      },
      right: {
        val: 1,
        left: {
          val: 0,
          left: null,
          right: null,
        },
        right: {
          val: 8,
          left: null,
          right: null,
        },
      },
    };
    const p = root.left;
    const q = root.right;
    const expected = root;
    const result = lowestCommonAncestor(root, p, q);
    expect(result).toBe(expected);
  });

  test("Case 2", () => {
    const root = {
      val: 3,
      left: {
        val: 5,
        left: {
          val: 6,
          left: null,
          right: null,
        },
        right: {
          val: 2,
          left: {
            val: 7,
            left: null,
            right: null,
          },
          right: {
            val: 4,
            left: null,
            right: null,
          },
        },
      },
      right: {
        val: 1,
        left: {
          val: 0,
          left: null,
          right: null,
        },
        right: {
          val: 8,
          left: null,
          right: null,
        },
      },
    };
    const p = root.left;
    const q = root.left.right.right;
    const expected = p;
    const result = lowestCommonAncestor(root, p, q);
    expect(result).toBe(expected);
  });
});
