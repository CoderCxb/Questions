// 寄生式组合继承
// 继承的最佳实践 class实现的原理
function SuperType() {
	this.sup = '父';
}

function SubType() {
	SuperType.call(this);
	this.sub = '子';
}


// 注意:以下这个函数仅仅相当于 class中的extends 并不包括class中super的功能
function inheritPrototype(subType, superType) {
	// Javascript高级程序第四版写法
	// 原型:SubType { constructor: [Function: SubType] }
	// 高级写法  相当于新建了新的subType的原型
	// 1. 将其原型指superType
	// 2. 为其添加constructor属性 使其成为一个构造函数
	let proto = Object.create(superType.prototype, {
		constructor: {
			value: SubType,
			writable: true,
			configurable: true,
		},
	});
	subType.prototype = proto;
	// console.log(subType.prototype.__proto__);
	// console.log(proto);
	// console.log('1', subType.__proto__);
	// 基本等效
	// 原型:SubType {}
	// Object.setPrototypeOf(subType.prototype, superType.prototype);
	// Object.assign(subType,{
	// 	constructor: {
	// 		value: SubType,
	// 		writable: true,
	// 		configurable: true,
	// 	},
	// })
	// subType.prototype.constructor = subType;
}

inheritPrototype(SubType, SuperType);
let s = new SubType();
// console.log(s.sup);
// console.log(s.__proto__.__proto__===SuperType.prototype);
// console.log(SubType.prototype.constructor);
// console.log(s instanceof SuperType);
// console.log(s instanceof SubType);
// console.log(s.__proto__ === SubType.prototype);
