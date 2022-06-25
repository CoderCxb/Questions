// 像arguments这样的 带有length 属性名是数字 但是并不是真的数组的对象 称为类数组
// 类数组不能直接使用数组的方法 但是可以通过[].methodName.call(pseudoArray)或者Array.prototype.methodName.call(pseudoArray)的方式调用数组的方法
// 如果想将类数组转换成数组 可以数组方法中返回新数组的方法 就可以生成新的数组
'use strict';
// 当非严格模式时  不使用解构赋值的情况下 形参和arguments是共享的 即修改形参 会改变arguments的值
function test(a,b){
    console.log();
    console.log(Array.prototype.slice.call(arguments,0));
    // console.log(args);
    let arr=Array.prototype.filter.call(arguments,(item)=>true)
    // console.log(arr);
    // console.log(args[0]===arguments[0]);
    a='xxx'
    console.log(arguments);
}

test(1,2);