// 对象的属性名必是字符串 如果传递的不是字符串 会先转换成字符串
// Symbol是特殊的字符串 并且不重复
let obj={};

let s= Symbol();
let s2=Symbol();

function f1(){}
function f2(){}

obj[s]='使用Symbol做键时';
obj[{}]='使用对象做键时';
obj[f1]='使用函数做键时'
let p1={};
let p2={};

// 使用对象做键
console.log(obj[p1]);
console.log(obj[p2]);
// 使用函数做键
// 之所以是用函数做键时 值会不同  是因为函数转成字符串时  是以函数体转成字符串的 若重写函数的toString方法 就可以改变该行为
console.log(obj[f1]);
console.log(obj[f2]);