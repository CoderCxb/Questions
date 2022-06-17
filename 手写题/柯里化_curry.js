// 柯里化 最简洁的写法时 return可以去掉
// 柯里化是将函数参数拆解为 (...args)(1)(1)... 也就是说 第一次 传入的参数个数可以是小于等于fn的参数length的任意个 但是后续调用时的参数个数只能是1
// 函数.length可以获取函数的参数个数
// var curry = function (fn, ...args1) {
//   return (judge = function (...args2) {
//     args1.push(...args2);
//     // 当judge的参数length和传入的fn参数length一致时  执行fn，不一致时 递归执行judge 将传入的参数不断拼接 直到长度和fn的length一样时 执行fn
//     if(args1.length >= fn.length){
//         let res = fn.call(this, ...args2);
//         return res;
//     }
//     return args1.length >= fn.length
//       ? fn.call(this, ...args2)
//       : (arg) => judge(...args2, arg);
//   });
// };

// let obj={name:'xx',test:function(a, b, c, d, e) {
//     console.log(this);
//     console.log([a, b, c, d, e]);
//     }
// }
// obj.test()

var fn = curry(function (...args) {
  return [...args];
});
// console.log(fn(1, 2, 3, 4, 5)); // [ 1, 2, 3, 4, 5 ]
// console.log(fn(1)(2)(3)(4)(5)); // [ 1, 2, 3, 4, 5 ]
// fn(1,2)(3,4)(5);        // 不执行 因为后续的参数个数不是一个了 (3,4)不合法

// TODO 目前不能重复调用
function add(a, b, c, d, e) {
  return a + b + c + d + e;
}

function curry(fn, ...args1) {
  function curried(...args2) {
    args1.push(...args2);
    if (args1.length >= 5) {
      let res = fn(...args1);
      return res;
    }
    console.log(curried);
    return curried;
  }
  return curried;
}

const curriedAdd = curry(add,10,20,30);
console.log(curriedAdd(1, 2));
// console.log(curriedAdd(1, 2, 3, 4, 5));


