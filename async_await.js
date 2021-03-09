// async
// 1.不使用await时 async函数和普通函数并无区别
// 2.async返回的值默认会被Promise.resolve()包裹成一个promise

// await
// 1.只能在async中使用
// 2.作用
// 2.1 暂停函数的执行 函数后续部分 放在下一个事件循环中执行
// 2.2 同步执行后续的紧跟的微任务(Promise) 但是 结果需要在下一个循环返回
function test() {
	return new Promise((resolve) => {
		// 结论 代码会马上执行 但是 结果在下一次事件循环中才能拿到
		console.log('测试await时 后续紧跟的代码会不会立刻执行');
		resolve(8);
	});
}

async function foo() {
	console.log(2);
	console.log(await test());
	console.log(9);
}

async function bar() {
	console.log(4);
	console.log(await 6);
	console.log(7);
}

console.log(1);
foo();
console.log(3);
bar();
console.log(5);

// 旧版浏览器 1 2 3 4 5 6 7 8 9
// 新版浏览器 1 2 3 4 5 8 9 6 7
