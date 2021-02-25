// 会被转换成 false的情况
console.log(Boolean(false)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(+0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('')); // false

console.log('----------------------------------');

// 原始值转number
// 字符串转数字时 合法的转换成功 不合法的NAN
// 一般使用parseInt进行转换
console.log(Number(undefined)); // NAN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number('123')); // 123

console.log('----------------------------------');

// 原始值转对象
// 通过new各自的构造函数 new Number()

// 对象转原始值
// Symbol.toPrimitive>valueOf>toString 函数返回值不是原始值的会被跳过 当都不是时 报错
let originObj = {
	value: 'value',
	[Symbol.toPrimitive]() {
		return 'Symbol.toPrimitive';
	},
	valueOf() {
		return 'valueOf';
	},
	toString() {
		return 'toString';
	},
};

console.log('将obj转为字符串' + originObj);
