/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Finds the level of a binary tree with the maximum sum of node values.
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {number} - The level with the maximum sum.
 */
const maxLevelSum = (root) => {
  if (!root) return 0;

  let maxLevel = 1;
  let maxSum = root.val;
  let currentLevel = 1;
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelSum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (levelSum > maxSum) {
      maxSum = levelSum;
      maxLevel = currentLevel;
    }

    currentLevel++;
  }

  return maxLevel;
};

export { maxLevelSum };
