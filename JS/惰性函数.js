// 惰性函数 
// 是一个有返回值的函数 并且外部需要使用到其返回值
// 多次调用 直接返回之前执行的结果
function foo(){
    let time=new Date();  // 获取到需要的返回值
    console.log('执行代码 计算返回值');
    // 通过重写自身 后续执行就都是执行这个
    foo=function(){
        return time;
    }
    // 返回执行结果
    return foo();
}

console.log(foo());
console.log(foo());