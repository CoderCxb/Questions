// 偏函数 
// 函数.length可以获取函数的参数个数
// 将函数拆解成两部分 第一次传入函数时也可以传入参数 执行返回的函数时也可以传入参数 总共就接收这两次 参数个数不限  少了就是undefined 多了就忽略
var partial=function (){
    let fn=Array.prototype.shift.call(arguments);
    // let fnArgs=[...arguments];
    return (...args)=>fn(...arguments,...args);
}


// 第一次 传入函数和参数
// 接收一个函数和若干参数 参数会传入函数中使用
// 当这些参数加上后续传入的参数>=所需函数参数时执行
var fn = partial(function(a, b, c, d, e) {
    console.log([a, b, c, d, e]);
},0,1,2);

// 调用partial返回的函数 并传入参数
fn(2,3,4,5);
