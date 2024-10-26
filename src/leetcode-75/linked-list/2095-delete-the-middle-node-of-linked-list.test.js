import { deleteMiddle } from "./2095-delete-the-middle-node-of-linked-list";

describe("Delete the Middle Node of a Linked List", () => {
  test("Case 1", () => {
    const head = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null,
            },
          },
        },
      },
    };
    const expected = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    };
    expect(deleteMiddle(head)).toEqual(expected);
  });

  test("Case 2", () => {
    const head = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: {
                val: 6,
                next: null,
              },
            },
          },
        },
      },
    };
    const expected = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 5,
            next: {
              val: 6,
              next: null,
            },
          },
        },
      },
    };
    expect(deleteMiddle(head)).toEqual(expected);
  });

  test("Case 3", () => {
    const head = {
      val: 1,
      next: null,
    };
    const expected = null;
    expect(deleteMiddle(head)).toEqual(expected);
  });
});
