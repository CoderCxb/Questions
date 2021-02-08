// @ts-nocheck
// 1.浏览器环境中 this指向window
console.log(this===module.exports);
// 2.node环境中 this指向module.export 而全局对象是globalThis
value='node环境中globalThis是全局变量';
console.log(globalThis.value);


console.log(foo);
function foo(){
    console.log("foo");
}
console.log(foo);
var foo = 1;
console.log(foo);

// 注意: 编译时 函数声明会被提到最前面 而变量声明会被提升 但是赋值不会被提升
// 相当于 
// function foo(){...}
// var foo;
// console.log(foo);
// console.log(foo);
// foo = 1; 
// console.log(foo);


// 未声明的变量 会被添加到全局对象上(即便它在很里层定义的)
function test(){
    return function(){
        hint="OK";
    }
}
test()();
console.log(hint);  // OK 