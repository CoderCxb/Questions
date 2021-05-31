// 原型式继承
// 适用于：有一个对象，你想在这个对象的基础上创建一个新的对象
// Object.create() 就是将原型式继承规范化了
function createObject(prototype, options) {
	function F() {}
	F.prototype = prototype;
	let obj = new F();
	Object.defineProperties(obj, options);
	return obj;
}

// 使用Object.create()
// console.log(Object.create({},{
//   name:{
//     value:"marco",
//     configurable:false,
//     writable:false,
//     enumerable:false
//   }
// }).name);

let proto = {
	name: 'marco',
	age: 18,
};
let instance1 = createObject(proto, {
	test: { value: '测试' },
});
let instance2 = createObject(proto, {});
console.log(instance1.test);
instance1.name = 'polo';
console.log(proto);
console.log(instance1);
