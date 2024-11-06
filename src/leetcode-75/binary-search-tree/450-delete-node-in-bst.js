/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Deletes a node with a given key from a binary search tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @param {number} key - The value of the node to delete.
 * @return {TreeNode} - The root node of the modified tree.
 */
const deleteNode = (root, key) => {
  if (!root) return null;

  if (root.val === key) {
    if (!root.left) {
      return root.right;
    }
    if (!root.right) {
      return root.left;
    }

    const minNode = findMin(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }

  return root;

  function findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
};

export { deleteNode };
