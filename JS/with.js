let obj={
  name:'marco'
}
// 1.with 当with的作用域中找不到变量时 会到()中的对象去找
// 注意：不常用 严格模式中会抛出异常
// with中的上下文就是传入的对象
with (obj){
  console.log(name);
}