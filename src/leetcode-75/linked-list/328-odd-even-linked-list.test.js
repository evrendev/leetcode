import { oddEvenList } from "./328-odd-even-linked-list";

describe("Odd Even Linked List", () => {
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
        val: 3,
        next: {
          val: 5,
          next: {
            val: 2,
            next: {
              val: 4,
              next: null,
            },
          },
        },
      },
    };
    expect(oddEvenList(head)).toEqual(expected);
  });

  test("Case 2", () => {
    const head = {
      val: 2,
      next: {
        val: 1,
        next: {
          val: 3,
          next: {
            val: 5,
            next: {
              val: 6,
              next: {
                val: 4,
                next: {
                  val: 7,
                  next: null,
                },
              },
            },
          },
        },
      },
    };
    const expected = {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 6,
          next: {
            val: 7,
            next: {
              val: 1,
              next: {
                val: 5,
                next: {
                  val: 4,
                  next: null,
                },
              },
            },
          },
        },
      },
    };
    expect(oddEvenList(head)).toEqual(expected);
  });
});
