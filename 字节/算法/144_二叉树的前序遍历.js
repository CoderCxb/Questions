// 144. 二叉树的中序遍历
// 给定一个二叉树的根节点 root ，返回它的 前序遍历。

// 示例 1：
// 输入：root = [1,null,2,3]
// 输出：[1,2,3]
// 二叉树节点定义
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
	let result = [];
	function recursive(root, result) {
		if (!root) return;
		result.push(root.val);
		if (root.left) {
			recursive(root.left, result);
		}
		if (root.right) {
			recursive(root.right, result);
		}
	}
	recursive(root, result);
	return result;
};

let root = new TreeNode(
	1,
	null,
	new TreeNode(2, new TreeNode(3, null, null), null)
);

console.log(preorderTraversal(root));
