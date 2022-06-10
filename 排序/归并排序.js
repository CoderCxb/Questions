/**
 * 
 * @param {Array} nums 
 */
function mergeSort(nums){
  if(nums.length < 2) return nums;
  let middleIndex = Math.floor(nums.length / 2);
  let left = nums.splice(0, middleIndex);
  let right = nums;
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let res = [];
  while(left.length || right.length) {
    if(!right.length) res.push(left.shift());
    else if(!left.length) res.push(right.shift());
    else if(left[0] > right[0]){
      res.push(right.shift());
    }else{
      res.push(left.shift());
    }
  }
  return res;
}

console.log(mergeSort([1,4,3,6,7,2,0,8,5,9]));