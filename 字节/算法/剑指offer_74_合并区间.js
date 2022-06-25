// 剑指 Offer II 074. 合并区间
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  let nIntervals = intervals.sort((pre, next) => pre[0] - next[0]);
  let res = [];
  let preInterval = nIntervals[0];
  for (const interval of nIntervals) {
    if (interval[0] <= preInterval[1]) {
      preInterval = [
        Math.min(preInterval[0], interval[0]),
        Math.max(preInterval[1], interval[1]),
      ];
    } else {
      res.push(preInterval);
      preInterval = interval;
    }
  }
  res.push(preInterval);
  return res;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);

console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);
