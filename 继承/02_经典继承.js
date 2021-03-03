// 经典继承(盗用构造函数继承) 
// 通过call实现 即在子构造函数中 调用SuperType.call(this) 将属性绑定到this 此处的this就是子构造函数的实例对象 
// 优点:
// 可以传递参数

// 问题:
// 原型链并没有继承下来 也就是说 子类是访问不到父构造函数的原型链上的属性
// 定义在构造函数上的方法 每次创建实例都会被创建一次

// 总结就是:不好用 一般不会单独使用
function SuperType(){
  this.sup='父'  
}

function SubType(){
  this.sub='子'
  SuperType.call(this,arguments)
}

let s = new SubType()
console.log(SubType.prototype);
// 注意：仅仅使用
console.log(s instanceof SuperType);
console.log(s.sup);
console.log(s.sub);