// 组合继承
// 综合了原型链继承和构造函数继承的方法,将两者的优点结合到一起
function SuperType() {
	this.sup = '父';
}
SuperType.prototype = {
	type: 'SuperType',
};

function SubType() {
	this.sub = '子';
	SuperType.call(this);
}

// SuperType的实例拿去赋值是比较差的选择 但是其他方式也都有问题 所以旧版本一般使用这种方式
// SubType.prototype = new SuperType();
// Object.setPrototypeOf(SubType.prototype, new SuperType()); 

// __proto__有兼容性问题
// SubType.prototype.__proto__ = SuperType.prototype;

// setPrototypeof 为ES6新增的语法 支持ES6语法时 是最佳解决方案
// Object.setPrototypeOf(SubType.prototype, SuperType.prototype);
SubType.prototype=new SuperType()

let s = new SubType();
console.log(s);
console.log(SubType.prototype);
console.log(s.constructor);
console.log(s instanceof SubType);
console.log(s instanceof SuperType);
console.log(s.__proto__);
console.log(s.sup);
console.log(s.sub);

console.log(Object.getOwnPropertyNames(s));

console.log(s.type);
