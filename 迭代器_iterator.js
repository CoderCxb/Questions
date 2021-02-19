var colors = ['red', 'green', 'blue'];
// 可以通过打印Symbol.iterator来查看是否实现了迭代器函数
// console.log(colors[Symbol.iterator]());
// 数组默认是有一个Symbol.iterator属性 因此可以遍历 想要修改遍历的结果 可以修改迭代器
// console.log(Symbol.iterator);
colors['myIterator'] = function () {
	let index = 0;
	return {
		next() {
			return {
				done: index >= colors.length,
				value: colors[index++],
			};
		},
		// return方法也必须返回一个有效的IteratorResult对象 如{done:true} 
		return(){
			console.log('当break、continue、return、throw时触发');
			return {done:true}
		}
	};
};
let iterator=colors[Symbol.iterator]();
// let iterator = colors['myIterator']();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
for(let color of colors){
  console.log(color);
}

// 字符串是有迭代器的 因此可以使用... 也可以遍历
// let str='Hello'
// console.log(...str);
// for(let i=0;i<5;i++){
//     console.log(i);
// }


// 数组的迭代器是没有return方法的 因此如果中途中断(break) 则下次继续迭代这个迭代器时 会继续下去
let arr=[1,2,3,4,5,6]
let arrIterator=arr[Symbol.iterator]();
for(let num of arrIterator){
	if(num>3)break;
	// console.log(num);
}
for(let num of arrIterator){
	// console.log(num);
}
