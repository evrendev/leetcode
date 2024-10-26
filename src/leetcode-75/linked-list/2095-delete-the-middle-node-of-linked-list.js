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
  // Liste boşsa veya sadece bir eleman varsa, başı döndür
  if (!head || !head.next) return null;

  let slowPointer = head;
  let fastPointer = head;
  let previousNode = null;

  // fastPointer her iki adımda bir hareket ederken, slowPointer her adımda bir ilerliyor
  while (fastPointer && fastPointer.next) {
    previousNode = slowPointer;
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  // Middle node'u atla, yani ortadaki elemanı sil
  previousNode.next = slowPointer.next;

  return head;
};

export { deleteMiddle };
