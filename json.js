//
let obj = {
	name: 'marco',
	age: 20,
	info: {
		source: 66,
		type: 'english',
	},
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
// 注意：如果该属性是一个数组 则还需要把该对象中需要序列化的属性也写上去
// 如下 info中有type和source，以下写了type 但是没有source，所有source没有被序列化
console.log(JSON.stringify(obj, ['name', 'age', 'run', 'info', 'type']));
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
