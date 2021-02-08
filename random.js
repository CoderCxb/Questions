let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let nArr=[];
while(arr.length>0){
  nArr.push(...arr.splice(Math.random()*arr.length,1))
}

console.log(nArr);