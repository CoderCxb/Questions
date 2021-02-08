//
let obj = {
	name: 'marco',
	age: 20,
	run() {
		console.log('跑步');
	},
};
let obj2 = {
	name: 'marco',
	age: 20,
	toJSON() {
		return '对象本身的toJSON方法';
	},
};
// 一、JSON.stringify()使用
// 通过json的方式无法深拷贝方法
// 1.可以通过replacer指定哪些属性需要序列化 数组的时候数组的值就是number了
console.log(JSON.stringify(obj, ['name', 'age', 'run']));
JSON.stringify(obj, function (key, value) {
	console.log('key:', key, 'value:', value);
	return value; // 要返回value 不然无法继续遍历
});
// 2.如果待序列化的对象有toJSON方法 则使用该方法的返回值
console.log(JSON.stringify(obj2)); // 使用toJSON的返回值
// 3.当JSON.stringify接收原始值时  基本等效于toString
console.log(typeof JSON.stringify(1)); // string

// 二、JSON.parse()使用
console.log(
	JSON.parse(JSON.stringify(obj), function (key, value) {
		console.log('key:', key, 'value:', value);
		return value;
	})
);
