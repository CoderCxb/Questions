// 53. 最大子序和

// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105

// 示例 1：
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let preMax = 0;
  for (const num of nums) {
    preMax = Math.max(num, num + preMax)
    max = Math.max(preMax, max)
  }
  return max;
}


// console.log(maxSubArray([2, -1, 3, -1])); // 4
// console.log(maxSubArray([-2, 1])); // 1
console.log(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4])); // 6
// console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6