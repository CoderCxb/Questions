// 102. 二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。示例：
// 二叉树：[3,9,20,null,null,15,7],
// 3
// / \
// 9  20
// /  \
// 15   7
// 返回其层序遍历结果：

// [
// [3],
// [9,20],
// [15,7]
// ]

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if(!root) return res;
  function recursive(root, level){
    res[level] = res[level] ? res[level] : [];
    res[level].push(root.val);
    if(root.left) recursive(root.left, level + 1);
    if(root.right) recursive(root.right, level + 1);
  }
  recursive(root,0)
  return res;
}

let root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(3, null, null), null),
	new TreeNode(2, new TreeNode(3, null, null), null)
);

console.log(levelOrder(root));
console.log(levelOrder(null));
