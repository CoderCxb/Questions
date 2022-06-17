// timeFormat(new Date().getTime(), "YYYY-MM-DD hh:mm")
// 思路： 获取年月日时分, 将时间格式占位符转换成数组, 然后进行对比替换

/**
 * 
 * @param {Date} date 
 * @param {string} formatStr 
 */
function dateFormat(date,formatStr){
  let year = String(date.getFullYear());
  let month = String(date.getMonth() + 1);
  let day = String(date.getDate());
  let hour = String(date.getHours());
  let minute = String(date.getMinutes());
  let second = String(date.getSeconds());
  let dateMap = {
    'Y': year,
    'M': month,
    'D': day,
    'h': hour,
    'm': minute,
    's': second
  }
  let preStr = '';
  function fn(){
    let replaceStr = '';
    if(preStr.includes('Y')){
      if(preStr.length % 4 === 0){
        replaceStr += dateMap['Y'].repeat(preStr.length / 4);
      }else{
        replaceStr += dateMap['Y'].repeat(preStr.length / 4);
        replaceStr += preStr.length % 4 > 2 ? dateMap['Y']: dateMap['Y'].slice(2)
      }
    }else{
      let time = dateMap[preStr[0]]
      let time2 = time > 9 ? time : '0' + time;
      if(preStr.length % 2 === 0){
        replaceStr += time2.repeat(Math.floor(preStr.length / 2));
      }else{
        replaceStr += time2.repeat(Math.floor(preStr.length / 2));
        replaceStr += time;
      }
    }
    formatStr = formatStr.replace(preStr, replaceStr)
  }
  for (const char of formatStr) {
    if(char in dateMap){
      if(!preStr || preStr.includes(char)){
        preStr += char;
      }else {
        fn()
        preStr = char;
      }
    }
  }
  fn()
  return formatStr;
}

console.log(dateFormat(new Date(), "YYYYY-MM-DD hh:mm:ss"));