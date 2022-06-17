// 无序数组中找到第二大的值

/**
 * 
 * @param {Array<number>} nums 
 * @returns 
 */
function getSecondNum(nums){
  if(nums.length < 2) return NaN;
  let max = Number.MIN_SAFE_INTEGER;
  let secondValue = max;

  nums.forEach((num) => {
    if(num > max){
      max = num
    }else if(num > secondValue){
      secondValue = num;
    }
  })

  return secondValue;
}


console.log(getSecondNum([9,8]));