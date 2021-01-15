// 函数参数
// arguments只包含传入的值 即便一个参数有默认值、外部没有传入 使用了默认值 但是还是不会出现在arguments中 
// arguments是一个类数组
var value=0;
function fnValue(){
    return value++;
}
// 如果默认参数是一个函数返回值 只有外部没有传入 使用默认值的时候 才会调用那个函数
function func(value,fn,defaultValue='defaultValue',fnDefaultValue=fnValue(),...rest/**剩余参数 */){
    console.log(arguments);
}

func('值',()=>{},'defaultValue','fnDefaultValue');

console.log(value);

// name属性
function t1(){}
let t2=function t1() {}
console.log(t1.name);
console.log(t2.bind().name);

// 函数内部有一个 [[Construct]]和[[Call]] 当使用new调用时 执行的是[[Construct]] 执行调用时 执行的是[[Call]] 箭头函数没有[[Construct]]
function Person(){
    // 使用new的时候 this是Person的实例
    console.log(this instanceof Person);
    // 未使用new关键字 new.target是undefined 否则 是构造函数
    console.log(new.target);
}

Person();
new Person();

