import { pairSum } from "./2130-maximum-twin-sum-of-a-linked-list";

describe("Maximum Twin Sum of a Linked List", () => {
  test("Case 1", () => {
    const head = {
      val: 5,
      next: {
        val: 4,
        next: {
          val: 2,
          next: {
            val: 1,
            next: null,
          },
        },
      },
    };

    expect(pairSum(head)).toBe(6);
  });

  test("Case 2", () => {
    const head = {
      val: 4,
      next: {
        val: 2,
        next: {
          val: 2,
          next: {
            val: 3,
            next: null,
          },
        },
      },
    };

    expect(pairSum(head)).toBe(7);
  });
});
