function myInstanceOf(instance, constructor) {
	// 当instance是undefined、null或者基本数据类型时 直接返回false
	if (
		instance === undefined ||
		instance === null ||
		(typeof instance !== 'object' && typeof instance !== 'function')
	) {
		return false;
	}
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

console.log(myInstanceOf({}, Object));
console.log(myInstanceOf(function () {}, Function));
