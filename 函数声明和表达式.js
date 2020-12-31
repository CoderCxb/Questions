// 函数声明和函数表达式的区别
// 函数表达式其实就是把一个函数的引用赋值给一个变量 因此 即便是用var修饰 有着静态提升 在赋值前使用 依旧是undefined 无法调用
// 函数声明存在函数声明提升的现象，因此可以在函数声明前就可以使用了
fn1()
fn2()
function fn1(){
  console.log('我是fn1');
}
var fn2=function(){
  console.log('我是fn2');
}