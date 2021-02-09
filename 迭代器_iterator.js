var colors = ['red', 'green', 'blue'];
// 数组默认是有一个Symbol.iterator属性 因此可以遍历 想要修改遍历的结果 可以修改迭代器
console.log(Symbol.iterator);
colors['myIterator'] = function () {
	let index = 0;
	return {
		next() {
			return {
				done: index === colors.length,
				value: colors[index++],
			};
		},
	};
};
// let iterator=colors[Symbol.iterator]();
let iterator = colors['myIterator']();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
