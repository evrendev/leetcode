import { goodNodes } from "./1448-count-good-nodes-in-binary-tree";

describe("Count Good Nodes in Binary Tree", () => {
  test("Case 1", () => {
    const root = {
      val: 3,
      left: {
        val: 1,
        left: {
          val: 3,
        },
      },
      right: {
        val: 4,
        left: {
          val: 1,
        },
        right: {
          val: 5,
        },
      },
    };
    expect(goodNodes(root)).toBe(4);
  });

  test("Case 2", () => {
    const root = {
      val: 3,
      left: {
        val: 3,
        left: {
          val: 4,
        },
        right: {
          val: 2,
        },
      },
    };
    expect(goodNodes(root)).toBe(3);
  });
});
