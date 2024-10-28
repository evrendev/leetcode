/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = (root1, root2) => {
  const getLeafValues = (node) => {
    if (!node) return [];

    let leafValues = [
      ...getLeafValues(node.left),
      ...getLeafValues(node.right),
    ];

    if (!leafValues.length) {
      leafValues = [node.val];
    }
    return leafValues;
  };

  const leafes1 = getLeafValues(root1);
  const leafes2 = getLeafValues(root2);

  return leafes1.toString() === leafes2.toString();
};

export { leafSimilar };
