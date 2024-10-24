import { reverseList } from "./206-reverse-linked-list";

describe("Reverse a linked list", () => {
  test("Example 1", () => {
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
      val: 5,
      next: {
        val: 4,
        next: {
          val: 3,
          next: {
            val: 2,
            next: {
              val: 1,
              next: null,
            },
          },
        },
      },
    };
    expect(reverseList(head)).toEqual(expected);
  });

  test("Example 2", () => {
    const head = {
      val: 1,
      next: null,
    };
    const expected = {
      val: 1,
      next: null,
    };
    expect(reverseList(head)).toEqual(expected);
  });

  test("Example 3", () => {
    const head = null;
    const expected = null;
    expect(reverseList(head)).toEqual(expected);
  });
});
