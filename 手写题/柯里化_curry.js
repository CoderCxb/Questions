// 柯里化 最简洁的写法时 return可以去掉
// 柯里化是将函数参数拆解为 (...args)(1)(1)... 也就是说 第一次 传入的参数个数可以是小于等于fn的参数length的任意个 但是后续调用时的参数个数只能是1
// 函数.length可以获取函数的参数个数
var curry = function (fn) {
  return (judge = function (...args) {
    // 当judge的参数length和传入的fn参数length一致时  执行fn，不一致时 递归执行judge 将传入的参数不断拼接 直到长度和fn的length一样时 执行fn
    if(args.length >= fn.length){
        let res = fn.call(this, ...args);
        return res;
    }else{

    }
    return args.length >= fn.length
      ? fn.call(this, ...args)
      : (arg) => judge(...args, arg);
  });
};

// let obj={name:'xx',test:function(a, b, c, d, e) {
//     console.log(this);
//     console.log([a, b, c, d, e]);
//     }
// }
// obj.test()

var fn = curry(function (...args) {
  return [...args];
});
console.log(fn(1, 2, 3, 4, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(fn(1)(2)(3)(4)(5)); // [ 1, 2, 3, 4, 5 ]
// fn(1,2)(3,4)(5);        // 不执行 因为后续的参数个数不是一个了 (3,4)不合法

// TODO 目前不能重复调用
function add(a,b,c,d,e){
    return [a,b,c,d,e];
  }
  
  
  function curry(fn, ...args1){
    function curried(...args2){
      if(curried.args){
        curried.args.push(...args2)
      }else{
        curried.args = [...args2];
      }
      if(curried.args.length >= 5){
        let res = fn(...curried.args);
        return res;
      }
      return curried;
    }
    return curried;
  }
  
  const curriedAdd = curry(add)
  console.log(curriedAdd(1,2)(3,4,5));
  console.log(curriedAdd(1,2,3,4,5));