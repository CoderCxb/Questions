// 原型继承
// 注意
// 获取实例的属性时 如果找不到 则沿着原型链向上找
// 如果是赋值 则会直接赋值在实例上 不会影响原型
// 想要修改原型上的属性 需要对原型进行操作

// setPrototypeOf
// 用于原型 将原型设置在__proto__上 即便是函数 这个方法也是设置在__proto__上 但是__proto__对函数没什么用 函数上使用prototype 对象使用__proto__
// 函数上的__proto__属性没什么用
function SuperType() {
	this.sup = '父';
}
SuperType.prototype.getSuperValue = function () {
	console.log(this.sup);
};

function SubType() {
	this.sub = '子';
}

// 将SuperType实例或者原型赋值给SubType的prototype属性 这样SubType就可以使用该对象上的方法 如果赋值的是实例 则还可以访问实例上的属性 如果赋值的是原型 则访问不到属性
// 缺点
// 1. 无法传参给SuperType
// 2. 父类属性和方法是绑定在原型上并且是共享的，属性共享其实不是很好
SubType.prototype = new SuperType();
// SubType.prototype=SuperType.prototype;

SubType.prototype['getSubValue'] = function () {
	console.log(this.sub);
};

let sub = new SubType();
sub['getSuperValue']();
sub.getSubValue();

console.log(SubType.prototype);
console.log(SuperType.prototype);
console.log(sub instanceof SubType);
console.log(sub instanceof SuperType);
