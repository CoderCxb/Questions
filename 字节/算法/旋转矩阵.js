// 面试题 01.07. 旋转矩阵
// 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

// 不占用额外内存空间能否做到？

// 给定 matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let len = matrix.length;
  let arr = new Array(len).fill().map(()=>[]);
  for(let i = matrix.length -1 ; i >=0; i--){
    for(let j = 0; j < matrix.length; j++){
      arr[j].push(matrix[i][j])
    }
  }
  for(let i = 0 ; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
      matrix[i][j] = arr[i][j] 
    }
  }
};


console.log(rotate([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]));
