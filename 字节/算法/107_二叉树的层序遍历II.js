// 107. 二叉树的层序遍历 II
// 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
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
var levelOrderBottom = function (root) {
  let res = [];
  if(!root) return res;
  let levelNodeArr = [root];
  while(levelNodeArr.length > 0){
    let values = [];
    let children = [];
    for(let i = 0;i < levelNodeArr.length; i++){
      let node = levelNodeArr[i];
      values.push(node.val);
      if(node.left) children.push(node.left)
      if(node.right) children.push(node.right)
    }
    levelNodeArr = children;
    res.unshift(values)
  }
  return res;
}

 let root = new TreeNode(
	1,
	new TreeNode(9, null, null),
	new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null,null))
);

console.log(levelOrderBottom(root));
