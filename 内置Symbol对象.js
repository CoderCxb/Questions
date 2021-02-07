// 实用的内置Symbol符号
// 1.Symbol.isConcatSpreadable决定concat时 是否打平该数组
let arr=[1,2,3];
arr.__proto__[Symbol.isConcatSpreadable]=false;
console.log([0].concat(arr));

// 2.Symbol.iterator定义迭代器
arr.__proto__[Symbol.iterator]=function(){
  let index = 0;
  return {
    next:()=>{
      return {
        value:this[index++],
        done:index>this.length,
      }
    }
  }
}
let iterator=arr[Symbol.iterator]();
console.log(iterator.next(),iterator.next(),iterator.next(),iterator.next());
console.log(...arr);

// 3.Symbol.match定义match方法匹配结果
let str='hello world!!';
str.__proto__[Symbol.match]=function(){
  return false;
}
console.log(str.match('hello'));

// 类似的还有很多 看到再说