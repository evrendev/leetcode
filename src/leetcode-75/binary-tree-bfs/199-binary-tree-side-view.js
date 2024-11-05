/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Returns the values of the nodes visible from the right side of the binary tree.
 * @param {TreeNode} root - The root of the binary tree.
 * @return {number[]} - The list of node values from the right side view.
 */
const rightSideView = (root) => {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let rightmostNode = null;

    // Traverse nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      rightmostNode = node;

      // Add child nodes for the next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // Append the rightmost node's value of the current level
    result.push(rightmostNode.val);
  }

  return result;
};

export { rightSideView };
