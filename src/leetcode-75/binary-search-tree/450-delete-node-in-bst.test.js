import { deleteNode } from "./450-delete-node-in-bst";

describe("Delete Node in BST", () => {
  test("Case 1", () => {
    expect(
      deleteNode(
        {
          val: 5,
          left: {
            val: 3,
            left: { val: 2, left: null, right: null },
            right: { val: 4, left: null, right: null },
          },
          right: {
            val: 6,
            left: null,
            right: { val: 7, left: null, right: null },
          },
        },
        3
      )
    ).toEqual({
      val: 5,
      left: {
        val: 4,
        left: { val: 2, left: null, right: null },
        right: null,
      },
      right: { val: 6, left: null, right: { val: 7, left: null, right: null } },
    });
  });

  test("Case 2", () => {
    expect(
      deleteNode(
        {
          val: 5,
          left: {
            val: 3,
            left: { val: 2, left: null, right: null },
            right: { val: 4, left: null, right: null },
          },
          right: {
            val: 6,
            left: null,
            right: { val: 7, left: null, right: null },
          },
        },
        0
      )
    ).toEqual({
      val: 5,
      left: {
        val: 3,
        left: { val: 2, left: null, right: null },
        right: { val: 4, left: null, right: null },
      },
      right: { val: 6, left: null, right: { val: 7, left: null, right: null } },
    });
  });
});
