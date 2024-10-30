/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Finds the lowest common ancestor (LCA) of two nodes in a binary tree.
 * @param {TreeNode} root - The root of the binary tree.
 * @param {TreeNode} p - The first node.
 * @param {TreeNode} q - The second node.
 * @return {TreeNode} - The LCA of nodes p and q.
 */
const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root;

  const leftSubtreeLCA = lowestCommonAncestor(root.left, p, q);
  const rightSubtreeLCA = lowestCommonAncestor(root.right, p, q);

  if (leftSubtreeLCA && rightSubtreeLCA) return root;

  return leftSubtreeLCA || rightSubtreeLCA;
};

export { lowestCommonAncestor };
