function twoSum( numbers ,  target ) {
  let result=[];
  let hash={};
  for(let i=0;i<numbers.length;i++){
      let number=numbers[i];
      console.log(hash);
      if(hash[number]!==undefined){
          result=[hash[number],i+1];
          result=result.sort((a,b)=>a-b);
      }
      hash[target-number]=i+1;
  }
  return result;
}


console.log(twoSum([3,2,4],6));
