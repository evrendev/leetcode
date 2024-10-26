/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteMiddle = (head) => {
  if (!head || !head.next) return null;

  let slowPointer = head;
  let fastPointer = head;
  let previousNode = null;

  while (fastPointer && fastPointer.next) {
    previousNode = slowPointer;
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  previousNode.next = slowPointer.next;

  return head;
};

export { deleteMiddle };
