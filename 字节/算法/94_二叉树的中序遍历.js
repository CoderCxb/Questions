// 94. 二叉树的中序遍历
// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = [];
  function orderTraver(node){
    if(!node) return;
    if(node.left) orderTraver(node.left)
    res.push(node.val)
    if(node.right) orderTraver(node.right)
  }
  orderTraver(root)
  return res;
};

let root = new TreeNode(
	1,
	null,
	new TreeNode(2, new TreeNode(3, null, null), null)
);

console.log(inorderTraversal(root));

