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
var levelOrder = function (root) {
  let res = [];
  if(!root) return res;
  let levelNodeArr = [root];
  while(levelNodeArr.length){
    for(let i = 0;i<levelNodeArr.length;i++){
      let values = [];
      let node = levelNodeArr.shift();
      if(node.left) levelNodeArr.push(node.left);
      if(node.right) levelNodeArr.push(node.right);
      values.push(node.val)
      console.log(values);
    }
  }
  return res;
}

 let root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(3, null, null), null),
	new TreeNode(2, new TreeNode(3, null, null), null)
);

console.log(levelOrder(root));
