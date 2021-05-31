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

// SubType.prototype = new SuperType();
// Object.setPrototypeOf(SubType.prototype, new SuperType());
SubType.prototype.__proto__ = SuperType.prototype;
// Object.setPrototypeOf(SubType.prototype, SuperType.prototype);
// SubType.prototype=new SuperType()

let s = new SubType();
console.log(SubType.prototype);
console.log(s.constructor);
console.log(s instanceof SubType);
console.log(s instanceof SuperType);
console.log(s.__proto__);
console.log(s.sup);
console.log(s.sub);

console.log(Object.getOwnPropertyNames(s));

console.log(s.type);
