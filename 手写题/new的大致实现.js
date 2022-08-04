// new要做的
// 接收一个构造函数，当构造函数返回引用数据类型时，则直接返回这个引用数据类型，不是 则返回一个对象，这个对象的原型和构造函数的原型一致
function myNew() {
	// 1和3可以使用 let obj=Object.create(Constructor.prototype)代替
	// 1. 创建空对象
	var obj = {};
	// 2. 接收并且删除arguments的第一个参数 第一个参数是构造函数 剩下的就是普通的参数
	// 注意点:使用 [].shift.call是因为arguments是个类数组 不能直接使用数组的方法 所以使用[].shift.call 可以让类数组使用数组的方法
	// 也可以使用解构赋值 
	// let [Constructor,...args] = arguments;
	var Constructor = [].shift.call(arguments);

	// 3.改变obj的原型 obj有可能会返回 而且是作为构造函数执行的this
	obj.__proto__ = Constructor.prototype;

	// 4.执行构造函数 接收返回值 根据返回值的不同 new返回的参数也不同
	let ret = Constructor.apply(obj, arguments);
	// 5.new的返回值 如果构造函数返回值为引用数据类型 则直接返回 如果不是 则返回obj
	return typeof ret === 'object' ? ret : obj;
}

function test() {
	// new.target 如果使用了new关键字 则返回函数本身 否则undefined
	console.log(new.target);
	console.log(this);
}
// test.prototype.xxx = 'xxx';

let t1 = myNew(test);
let t2 = new test();

// 构造函数默认是返回this的 如果自己return了一个对象 则外部拿到的就是这个对象 如果返回原始值(基本数据类型) 则忽略，还是使用this
