import { leafSimilar } from "./872-leaf-similar-trees";

describe("Leaf-Similar Trees", () => {
  test("Case 1", () => {
    const root1 = {
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
          val: 9,
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
    const root2 = {
      val: 3,
      left: {
        val: 5,
        left: {
          val: 6,
          left: null,
          right: null,
        },
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
      right: {
        val: 1,
        left: {
          val: 4,
          left: null,
          right: null,
        },
        right: {
          val: 2,
          left: {
            val: 9,
            left: null,
            right: null,
          },
          right: {
            val: 8,
            left: null,
            right: null,
          },
        },
      },
    };

    expect(leafSimilar(root1, root2)).toBe(true);
  });

  test("Case 2", () => {
    const root1 = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: null,
    };
    const root2 = {
      val: 2,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: null,
    };

    expect(leafSimilar(root1, root2)).toBe(true);
  });
});
