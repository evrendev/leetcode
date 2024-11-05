/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = (root, targetSum) => {
  if (!root) return 0;

  const countPathsFromNode = (node, target) => {
    if (!node) return 0;

    const isPath = node.val === target ? 1 : 0;
    const leftPaths = countPathsFromNode(node.left, target - node.val);
    const rightPaths = countPathsFromNode(node.right, target - node.val);

    return isPath + leftPaths + rightPaths;
  };

  const totalPathsFromRoot = countPathsFromNode(root, targetSum);
  const totalPathsFromLeftSubtree = pathSum(root.left, targetSum);
  const totalPathsFromRightSubtree = pathSum(root.right, targetSum);

  return (
    totalPathsFromRoot + totalPathsFromLeftSubtree + totalPathsFromRightSubtree
  );
};

export { pathSum };
