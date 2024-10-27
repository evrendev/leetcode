import { maxDepth } from "./104-maximum-depth-of-binary-tree";

describe("Maximum Depth of Binary Tree", () => {
  test("Case 1", () => {
    const root = {
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null,
        },
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
    };

    expect(maxDepth(root)).toBe(3);
  });

  test("Case 2", () => {
    const root = {
      val: 1,
      left: null,
      right: null,
    };

    expect(maxDepth(root)).toBe(1);
  });
});
