// 给数组中的每个字符串编号,f`(['ab','c', 'd', 'ab','c'])=>['ab','c','d','ab2','c2']`

/**
 * 
 * @param {Array<string>} strArr 
 */
function setStrNo(strArr){
  let map = {};
  let res = [];
  strArr.forEach((str)=>{
    if(map[str] === undefined){
      map[str] = 0;
    }else{
      map[str] ++;
    }
    res.push(str + (!map[str] ? '' : map[str]))
  })
  return res;
}

console.log(setStrNo(['ab','c', 'd', 'ab','c']));