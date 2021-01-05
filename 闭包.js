function outer(){
    let num=10;
    function inner(){
        return num;
    }
    return inner;
}

// 闭包：通过函数创建一个函数作用域 使变量的作用域改变
// 上述代码中 num的作用域是在outer中 但是通过闭包 我们在外部也能获取到
let getNum=outer()()
console.log(getNum);

// 闭包不能滥用 因为闭包会使变量都保存在内存中，对内存占用较大。

// 思考题
globalThis.value = "The Window";
var object = {
    value : "My Object",
    // 默认调用函数时 this指向的这个对象 即object 但是 这里返回了一个函数 
    // 这个函数和对象是没有关联的 因此这里的this指的是外部的globalThis
    getValueFunc1 : function(){
        // 返回的是一个函数 在外部调用的时候 this指向的就是全局对象
　　    return function(){
            return this.value;
　　    };
　　},
    // 调用函数 this指向object 使用that接收this 通过闭包 使得that在外部也能访问 因此指向的是object的value
    getValueFunc2(){
        let that=this;
        return function(){
　　　　　　return that.value;
        }
    }
};

console.log(object.getValueFunc1()());
console.log(object.getValueFunc2()());

// 常考题 
// 因为 i是用var定义的 是全局变量
// 因此 在for循环结束后 console.log(i)中的i是全局的i 是同一个
var data = [];

for (var i = 0; i < 3; i++) {
    data[i] = function () {
      console.log(i);
    };
  }
  
  data[0]();  // 3.
  data[1]();  // 3
  data[2]();  // 3