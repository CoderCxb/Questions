
// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

// 叶子节点 是指没有子节点的节点。

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if(!root)  return false;
  let res = false;

  function traverse(node, value){
    const newValue = value + node.val;
    if(newValue === targetSum && !node.left && !node.right){
      res = true;
    }
    if(node.left) traverse(node.left, newValue);
    if(node.right) traverse(node.right, newValue);
  }

  traverse(root,0)

  return res;
};

let root = new TreeNode(1, new TreeNode(2))

console.log(hasPathSum(root, 1));