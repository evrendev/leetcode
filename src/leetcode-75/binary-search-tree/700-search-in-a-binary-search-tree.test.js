import { searchBST } from "./700-search-in-a-binary-search-tree";

describe("Search in a Binary Search Tree", () => {
  it("Case 1", () => {
    const root = {
      val: 4,
      left: {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    };
    const val = 2;
    const expected = {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };
    expect(searchBST(root, val)).toEqual(expected);
  });

  it("Case 2", () => {
    const root = {
      val: 4,
      left: {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    };
    const val = 5;
    const expected = null;
    expect(searchBST(root, val)).toEqual(expected);
  });
});
