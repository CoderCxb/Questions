// 寄生式组合继承
// 继承的最佳实践 class实现的原理
function SuperType() {
	this.sup = 'Super Value';
}

function SubType() {
	SuperType.call(this);
	this.sub = 'Sub Value';
}


// 注意:以下这个函数仅仅相当于 class中的extends 并不包括class中super的功能
function inheritPrototype(subType, superType) {
	// Javascript高级程序第四版写法
	// 原型:SubType { constructor: [Function: SubType] }
	// 高级写法  相当于新建了新的subType的原型
	// 1. 以superType的原型对象为原型,创建一个subType的原型对象,并将其constructor指向构造函数
	let proto = Object.create(superType.prototype, {
		constructor: {
			value: SubType,
			writable: true,
			configurable: true,
		},
	});
	subType.prototype = proto;
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
console.log(SubType.prototype.constructor.prototype); // 原型对象上的constructor指向构造函数

// 原型链包含SuperType和SubType
console.log(s instanceof SuperType); 
console.log(s instanceof SubType);
