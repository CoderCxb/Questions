async function fn1() {
	return new Promise((resolve) => {
		// console.log('fn1');
		// Promise.resolve('fn1').then((data) => {
		// 	console.log(data);
		// });
		setTimeout(() => {
			console.log('fn1');
			resolve('fn1');
		}, 3000);
	});
}
async function fn2() {
	return new Promise((resolve) => {
		// console.log('fn2');
		setTimeout(() => {
			console.log('fn2');
			resolve('fn2');
		}, 100);
	});
}
async function run() {
	// let s1 = await fn1();
	// let s2 = await fn2();
	// console.log(s1,s2);
	// 1. 同步执行并获取它的promise 在fn1中的同步代码执行完之后 fn2就会执行 如果加了await 则需要fn1代码都执行完毕 fn2才会执行
	let str1 = fn1();
	let str2 = fn2();
	// 2.再使用await获取其值 使用的时候可以使用await获取promise的值 也可以在then中赋值
	let result1 = await str1;
	let result2 = await str2;
	console.log(result1, result2);
	// let r1, r2;
	// str1.then((data) => {
	// 	r1 = data;
	// 	str2.then((data) => {
	// 		r2 = data;
	// 		console.log(r1, r2);
	// 	});
	// });
	// 3. 为什么要那样写？
	// 以下是一般的写法 这种写法会直接阻塞程序的执行 fn1结束前 fn2不会被推到任务队列 容易导致性能问题
	// let result1 = await fn1();
	// let result2 = await fn2();
	// console.log(result1, result2);
}
run();
