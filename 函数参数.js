// 接收的参数相当于 let o = obj,用形参接收实参
function test(o){
    // 如果是对象 则赋值的是对象的引用 此时操作o的属性 则会改变外部的对象
    o.a='a';
    // 但是这个是不会改变外部的 因为这个参数的是局部变量
    o={};
}
let obj={};
test(obj);
console.log(obj);