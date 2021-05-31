// 1. 对象会转成NaN
console.log(+{ name: 'marco' });
console.log(Number({}));

// 2. 对象相加 会转成字符串进行拼接
console.log({} + {});

let obj = {
	name: 'box',
};
// 3. Symbol.toPrimitive定义转换时 如何执行
// 转换算法是：
// 调用 obj[Symbol.toPrimitive](hint) 如果这个方法存在，
// 否则，如果 hint 是 "string"
// 尝试 obj.toString() 和 obj.valueOf()，无论哪个存在。
// 否则，如果 hint 是 "number" 或者 "default"
// 尝试 obj.valueOf() 和 obj.toString()，无论哪个存在。
obj.__proto__[Symbol.toPrimitive] = function (hint) {
	switch (hint) {
		case 'string':
			return `{name: "${this.name}"}`;
		case 'number':
			return 0;
		case 'default':
			return 'default';
	}
};
console.log('' + obj);
console.log(String(obj));
console.log(Number(obj));
