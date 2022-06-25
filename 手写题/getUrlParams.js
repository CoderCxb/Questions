let str='http://baidu.com?name=marco&age=18&key=';
/**
 * 
 * @param {string} url 
 * @param {string} key 
 */
function getUrlParams(url,key){
  let params={};
  let paramsStr='';
  let index=url.indexOf('?');
  if(index!==-1){
    paramsStr=url.substr(index+1);
  }
  paramsStr.split('&').forEach((paramsArr)=>{
    let arr=paramsArr.split('=');
    params[arr[0]]=arr[1]
  })
  console.log(params);
  return params[key];
}

console.log(getUrlParams(str,'name'));