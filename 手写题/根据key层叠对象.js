const obj = {
  '1':{
    text: '1',
  }, 
  '1-1': {
    text: '1-1'
  },
  '1-2': {
    text: '1-2'
  },
  '1-1-1':{
    text: '1-1-1'
  },
  '3-3-3':{
    text: '3-3-3'
  }
}


function stackUp(obj){
  let res = {};
  // 默认设置为res,在遍历时不断修改
  let storeItem = res;
  let keys = Object.keys(obj);
  for (const key of keys) {
    let levels = key.split('-');
    while(levels.length > 0){
      let level = levels.shift();
      // 设置默认值
      storeItem[level] = storeItem[level] || {
        children: {},
      }
      // 当levels遍历完毕, 需要赋值obj上对应的值
      if(levels.length === 0){
        storeItem[level] = {
          text: obj[key].text,
          ...storeItem[level],
        }
      }
      // 设置为children继续遍历
      storeItem = storeItem[level].children
    }
    // 重置为res, 继续下一个key
    storeItem = res;
  }
  return res;
}


console.log(stackUp(obj)['3']);
