// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let res = true;
  function recursive(left, right){
    if(!left || !right) {
      if(left !== right) res = false;
      return;
    };
    if(left.val !== right.val) {
      res = false;
    }
    recursive(left.left, right.right)
    recursive(left.right, right.left)
  }
  recursive(root.left, root.right)
  return res;
};


let root = new TreeNode(
	1,
	new TreeNode(
		2,
	),
  new TreeNode(
		2,
	),
);

console.log(isSymmetric(root));


