let s1 = 'Hello World';
let s2 = s1.slice(0, 5);
// 本身string是原始值 不应该有方法 但是后台做了很多操作
// 1.创建一个String类型的实例：
// let s1 = new String('Hello World');
// let s2=s1.slice(0,5);
// s1 = null;

// 个人理解 可以看作
// let s1='Hello World';
// let s2= new String(s1).slice(0,5);
// a对应的数字为97 对应的UTF-16就是U+0061
console.log(0x61 === 97);
console.log(String.fromCharCode(0x61)); // a

// String Number Boolean typeof时 都是Object
// 使用new Object可以创建String Number Boolean的实例
let str = new Object('Hello Javascript');
// console.log(str instanceof String); // true
// console.log(str.slice(0,5));  // 虽然会报错 但是可以运行成功
