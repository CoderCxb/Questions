// fn([['a', 'b'],['n', 'm'], ['0', '1']])=>['an0','an1','am0','am1','bn0','bn1','bm0','bm1']

/**
 * 
 * @param {Array<Array<string>} charsArr 
 */
function getCombination(charsArr){
  let res = [];
  function combination(preStr, index){
    if(index >= charsArr.length) {
      res.push(preStr)
      return
    };
    let chars = charsArr[index];
    chars.forEach((char)=>{
      const nextStr = preStr + char;
      combination(nextStr, index + 1);
    })
  }
  combination('', 0);
  return res;
}


console.log(getCombination([['a', 'b'],['n', 'm'], ['0', '1']]));