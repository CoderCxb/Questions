// 1.typeof  除了函数 其他的引用数据类型typeof的结果都是object
console.log(typeof 1); // number
console.log(typeof 'str'); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // array
console.log(typeof Symbol()); // symbol
console.log(typeof function () {}); // function

console.log('------------------------------------------------------');

// 2.Object.prototype.toString.call()
console.log(Object.prototype.toString.call(1)); // [object Number]
console.log(Object.prototype.toString.call('str')); // [object String]
console.log(Object.prototype.toString.call(true)); // [object Boolean]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call({})); // [object Object]
console.log(Object.prototype.toString.call(Symbol())); // [object Symbol]
console.log(Object.prototype.toString.call(function () {})); // [object Function]
console.log(Object.prototype.toString.call(new Date())); // [object Date]
console.log(Object.prototype.toString.call(Error())); // [object Error]
console.log(Object.prototype.toString.call(/a/)); // [object RegExp]
console.log(Object.prototype.toString.call(Promise.resolve())); // [object Promise]

console.log('------------------------------------------------------');

// 3. instanceof 只能用于判断对象是否是类型的实例 基本数据类型(Symbol基本等效于字符串)无法识别
console.log(Symbol() instanceof Symbol); // false
console.log(new Number(1) instanceof Number); // true
console.log({} instanceof Object); // true
console.log(function () {} instanceof Function); // true
console.log([] instanceof Array); // true

console.log('------------------------------------------------------');

// 4. 使用 prototype.isPrototypeOf()方法判断类型
console.log(Array.prototype.isPrototypeOf([])); // true
console.log(Array.prototype.isPrototypeOf({})); // false

console.log('------------------------------------------------------');
// 5. window对象的判断
function isWindow(obj) {
	// 在浏览器中全局对象是window
	return obj != null && obj === obj.window;
}

function isGlobal(obj) {
	// 在node中全局对象是global/globalThis
	return obj != null && obj === obj.global;
}

console.log(isGlobal({}));
console.log(isGlobal(global));

console.log('------------------------------------------------------');

// 6.实现一个简单的instanceOf
function myInstanceOf(instance, constructor) {
	// 当instance是undefined、null或者基本数据类型时 直接返回false
	if (
		instance === undefined ||
		instance === null ||
		(typeof instance !== 'object' && typeof instance !== 'function')
	)
		return false;
	// 获取实例的原型
	let proto = Object.getPrototypeOf(instance);
	// 通过循环实现原型链向上查询
	while (proto) {
		// 原型链相等时 则instance是constructor的实例
		if (constructor.prototype === proto) return true;
		// 如果不是 则proto继续向上
		proto = Object.getPrototypeOf(proto);
	}
	// 当while中没有满足时 则说明不是实例 返回false
	return false;
}

console.log(myInstanceOf('1', String));
console.log(myInstanceOf(function () {}, Function));
