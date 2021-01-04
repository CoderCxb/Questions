// 1.作用域 
// 函数的作用域在定义的时候就确定了 下面两个函数中的f 定义在checkscope中  因此 默认访问的都是checkscope函数作用域中的变量 当没有时 才会向外部寻找 闭包就是利用这个原理实现的
// 2. 上下文栈
// 当函数执行的时候会创建一个执行上下文 当函数结束的时候 就会将上下文从栈中弹出
// 虽然执行的结果一样 但是它们的执行上下文栈不同 
// 第一个函数的函数体中执行的f
// ECStack.push(<checkscope> functionContext);
// ECStack.push(<f> functionContext);
// ECStack.pop();
// ECStack.pop();
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
console.log(checkscope()); // local scope

// 第二个函数是返回一个函数再执行 因此如下
// ECStack.push(<checkscope> functionContext);
// ECStack.pop();
// ECStack.push(<f> functionContext);
// ECStack.pop();
var scope = "global scope";
function checkscope2(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
console.log(checkscope2()()); // local scope