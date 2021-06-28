async function test() {
	let arr = [4, 2, 1];

	// 无序,即便加了await,下一个异步也不会等上一个执行完毕再执行
	// arr.forEach(async (item) => {
	// 	const res = await handle(item);
	// 	console.log(res);
	// });

	// 有序
	for (let index = 0; index < arr.length; index++) {
		const res = await handle(arr[index]);
		console.log(res);
	}
	// 有序
	// for (const iterator of arr) {
	// 	const res = await handle(iterator);
	// 	console.log(res);
	// }
	console.log('结束');
}

function handle(x) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(x);
		}, 100 * x);
	});
}

test();
