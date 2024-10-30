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
 * @return {number}
 */
const longestZigZag = (root) => {
  let maxZigZagLength = 0;

  const dfs = (node, moveLeft, moveRight) => {
    if (!node) return;

    maxZigZagLength = Math.max(maxZigZagLength, moveLeft, moveRight);

    dfs(node.left, moveRight + 1, 0);
    dfs(node.right, 0, moveLeft + 1);
  };

  dfs(root, 0, 0);

  return maxZigZagLength;
};

export { longestZigZag };
