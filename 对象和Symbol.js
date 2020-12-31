// 对象的属性名必是字符串 如果传递的不是字符串 会先转换成字符串
// Symbol是特殊的字符串 并且不重复
let obj={};

let s= Symbol();
let s2=Symbol();


obj[s]='xxx';
obj[{}]='对';
let p1={};
let p2={};