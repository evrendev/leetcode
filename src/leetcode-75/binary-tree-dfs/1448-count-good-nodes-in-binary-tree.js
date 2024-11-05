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
const goodNodes = (root) => {
  const dfs = (node, maxVal) => {
    if (!node) return 0;

    let goodNodeCount = 0;
    if (node.val >= maxVal) {
      goodNodeCount = 1;
      maxVal = node.val;
    }

    goodNodeCount += dfs(node.left, maxVal);
    goodNodeCount += dfs(node.right, maxVal);

    return goodNodeCount;
  };

  return dfs(root, root.val);
};

export { goodNodes };
