// 746. 使用最小花费爬楼梯
// 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

// 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

// 请你计算并返回达到楼梯顶部的最低花费。

// 输入：cost = [10,15,20]
// 输出：15
// 解释：你将从下标为 1 的台阶开始。
// - 支付 15 ，向上爬两个台阶，到达楼梯顶部。
// 总花费为 15 。

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length < 3) return Math.min(...cost);
  let pre2 = cost[0];
  let pre1 = cost[1];
  for (let i = 2; i < cost.length; i++) {
    let price = cost[i]
    let v = Math.min(pre1 + price, pre2 + price);
    pre2 = pre1;
    pre1 = v;
  }
  pre1 = Math.min(pre1, pre2)
  return pre1
};


console.log(minCostClimbingStairs([10,15,20]));
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));