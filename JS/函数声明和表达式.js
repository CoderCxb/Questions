// 函数声明和函数表达式的区别
// 函数表达式其实就是把一个函数的引用赋值给一个变量 因此 即便是用var修饰 有着静态提升 在赋值前使用 依旧是undefined 无法调用
// 函数声明存在函数声明提升的现象，因此可以在函数声明前就可以使用了
fn1()
function fn1(){
  console.log('我是fn1');
}
var fn2=function(){
  console.log('我是fn2');
}
fn2()

// 不推荐 因为这段代码会被执行两次 第一次是把他当作普通代码执行 第二次是解释传给构造函数的字符串 这样会英雄性能
let fn3=new Function("str","console.log(str);")
fn3("我是fn3")

// 报错 写了return就要加{} 如果不写{} 就直接写个值 不用return
// let fn4=(a,b)=> return a*b