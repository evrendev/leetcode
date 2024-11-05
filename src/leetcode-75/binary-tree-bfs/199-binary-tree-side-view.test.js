import { rightSideView } from "./199-binary-tree-side-view";

describe("Binary Tree RightSide View", () => {
  test("Case 1", () => {
    const root = {
      val: 1,
      left: {
        val: 2,
        right: {
          val: 5,
        },
      },
      right: {
        val: 3,
        right: {
          val: 4,
        },
      },
    };

    expect(rightSideView(root)).toEqual([1, 3, 4]);
  });

  test("Case 2", () => {
    const root = {
      val: 1,
      left: {
        val: 2,
        right: {
          val: 4,
        },
      },
      right: {
        val: 3,
      },
    };

    expect(rightSideView(root)).toEqual([1, 3, 4]);
  });

  test("Case 3", () => {
    const root = {
      val: 1,
      right: {
        val: 3,
      },
    };

    expect(rightSideView(root)).toEqual([1, 3]);
  });

  test("Case 4", () => {
    const root = null;

    expect(rightSideView(root)).toEqual([]);
  });
});
