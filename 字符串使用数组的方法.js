let str='abcdefg';

// 字符串可以通过 Array.prototype.methodName.call(str)的方式使用数组的方法
// 注意：只能使用不改变原数组的方法 如 join、map、filter
console.log(Array.prototype.join.call(str,'-'));

// 不能使用如 reverse、push、pop等会改变数组的方法
console.log(Array.prototype.reverse.call(str));