/**
 * 
 * @param {number} num 
 */
function reverseNum1(num){
  return String(num).split('').reverse().reduce((pre,cur)=>{
    if(cur === '-'){
      return -pre
    }else{
      return Number(pre + cur)
    }
  })
}

console.log(reverseNum1(-321));
console.log(reverseNum1(1200));


/**
 * 
 * @param {number} num 
 */
function reverseNum2(num){
  let numStr = String(num);
  if(numStr.startsWith('-')){
    return -numStr.split('').reverse().join('').slice(0, -1)
  }
  return +numStr.split('').reverse().join('')
}

console.log(reverseNum2(-321));
console.log(reverseNum2(1200));