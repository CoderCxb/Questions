// call 
// @ts-ignore
Function.prototype.myCall=function(context,...params){
  context=context?context:globalThis;
  context.fn=this;
  context.fn(...params);
  Reflect.deleteProperty(context,'fn')
}
// bind
// 1.在Function的原型上添加属性 
// @ts-ignore
Function.prototype.myBind=function(context,...params1){
  // 1.this是函数
  let self=this;
  // 2.context是接收的第一个参数 也就是this要指向的对象 
  // params1则是传递给原函数的参数
  context=context?context:globalThis;
  // 3.这里的this指的是需要改变指向的函数 将函数绑定到传入的对象上 这样调用方法的话 函数的this指的就是对象了
  // 使用Symbol,避免重名等问题
  let fn = Symbol('fn');
  context.__proto__[fn]=self;
  // 4.由于bind不是调用的 因此需要返回一个函数 用于外界触发
  let func=function(...params2){
    // 5.如果this是self的实例 说明使用了new关键字 因此返回this 否则不变
    // context=this instanceof self?this:context;
    context=new.target?this:context;
    return context[fn](...params1,...params2);
  }
  // 6. 让return的函数的原型和原函数保持一致
  func.prototype=self.prototype;
  return func;
}

// apply 
// @ts-ignore
Function.prototype.myApply=function(context,params){
  context=context?context:globalThis;
  context.fn=this;
  context.fn(...params);
  Reflect.deleteProperty(context,'fn')
}

// Function.prototype.customCall = function(ctx){
//   ctx.fn = this;
//   let args = [...arguments].slice(1);
//   let result = ctx.fn(...args);
//   delete ctx.fn;
//   return result
// }

function test(num){
  // console.log(num);
  console.log(this);
  console.log(arguments);
}

let obj={name:'marco'};
// test.call(obj,'1',2,true)
// test.myCall(obj,'1',2,true)
// test.apply(obj,['1',2,true])
// test.myApply(obj,['1',2,true])
// test.bind(obj,'1',2,true)('bindValue')
// @ts-ignore
// test.myBind(obj,'1',2,true)('bindValue')
let b1=test.myBind(obj,'1',2,true);
let b2=test.bind(obj,'1',2,true)
new b1();
new b2()