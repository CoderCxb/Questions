// 70. 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(!n) return n;
  let pre2 = 0;
  let pre1 = 1; 
  for (let index = 1; index < n; index++) {
    let v = pre1 + pre2;
    pre2 = pre1;
    pre1 = v;
  }
  return pre1 + pre2;
};

console.log(climbStairs(45));