class Person {
	name = 'marco';
	age = 20;
	n = {};
	run() {
		console.log('跑步');
	}
}
let p = new Person();

// 1.浅拷贝
let shallowCopy = function (obj) {
	if (typeof obj !== 'object') return obj;
	let newObj = Array.isArray(obj) ? [] : Object.create(obj.__proto__);
	for (var key in obj) {
		newObj[key] = obj[key];
	}
	return newObj;
};
// console.log(p);
// console.log(shallowCopy(p));
// console.log(Object.assign(p));

// 2.深拷贝
var deepCopy = function (obj, map = new WeakMap()) {
	// 1. 若是基本数据类型 则直接返回
	if (!(obj instanceof Object)) return obj;
	// 2. 若是正则表达式对象 则以相同的规则再生成一个
	if (obj instanceof RegExp) return new RegExp(obj.source,obj.flags);
	// 3. 若是Date对象
	if (obj instanceof Date) return new Date(+obj);
	// 4. 如果obj是数组 则创建空数组
	// 如果obj不是数组 则创建一个对象 并且 将这个对象的原型指向原对象的原型
	var newObj = obj instanceof Array ? [] : Object.create(obj.__proto__);
	// 5. 避免递归调用  使用map存储已经拷贝过的对象
	if (map.get(obj)) {
		return map.get(obj);
	}
	// 6. 存储obj和拷贝后的newObj
	map.set(obj, newObj);
	// 7. 使用getOwnPropertyNames遍历 避免遍历到原型上的属性
	// 也可以通过for(let key in obj) + if(obj.hasOwnProperty(key))遍历 避免访问原型属性
	for (var key of Object.getOwnPropertyNames(obj)) {
		newObj[key] =
			obj[key] instanceof Object ? deepCopy(obj[key], map) : obj[key];
	}
	return newObj;
};

// 注意：函数依旧是浅拷贝 但是 原对象方法改变 不会影响拷贝后对象的方法
// let newP = deepCopy(p);
// console.log(p.run === newP.run); // true
// p.run();
// p.run = () => {};
// newP.run();

let a = {};
let b = {
	a,
};
a.b = b;
let ca = deepCopy(a);
console.log(ca);
