const FULFILLED = 'fulfilled';
const PENDING = 'pending';
const REJECTED = 'rejected';
const resolvePromise = (promise2, x, resolve, reject) => {
	// 自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise  Promise/A+ 2.3.1
	if (promise2 === x) {
		return reject(
			new TypeError('Chaining cycle detected for promise #<Promise>')
		);
	}
	// Promise/A+ 2.3.3.3.3 只能调用一次
	let called;
	// 后续的条件要严格判断 保证代码能和别的库一起使用
	if ((typeof x === 'object' && x != null) || typeof x === 'function') {
		try {
			// 为了判断 resolve 过的就不用再 reject 了（比如 reject 和 resolve 同时调用的时候）  Promise/A+ 2.3.3.1
			let then = x.then;
			if (typeof then === 'function') {
				// 不要写成 x.then，直接 then.call 就可以了 因为 x.then 会再次取值，Object.defineProperty  Promise/A+ 2.3.3.3
				then.call(
					x,
					(y) => {
						// 根据 promise 的状态决定是成功还是失败
						if (called) return;
						called = true;
						// 递归解析的过程（因为可能 promise 中还有 promise） Promise/A+ 2.3.3.3.1
						resolvePromise(promise2, y, resolve, reject);
					},
					(r) => {
						// 只要失败就失败 Promise/A+ 2.3.3.3.2
						if (called) return;
						called = true;
						reject(r);
					}
				);
			} else {
				// 如果 x.then 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.3.4
				resolve(x);
			}
		} catch (e) {
			// Promise/A+ 2.3.3.2
			if (called) return;
			called = true;
			reject(e);
		}
	} else {
		// 如果 x 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.4
		resolve(x);
	}
};
class MyPromise {
	constructor(executor) {
		this.status = PENDING; // 状态
		this.value = undefined; // 成功传递的值
		this.reason = undefined; // 失败的原因
		// 使用数组是因为当resolve在异步操作中时 then中获取不到
		this.onResolvedCallback = []; // 成功的回调函数数组
		this.onRejectedCallback = []; // 失败的回调函数数组
		// 将状态更改为完成 fulfilled 并执行成功的回调函数
		let resolve = (value) => {
			if (this.status === PENDING) {
				this.status = FULFILLED;
				this.value = value;
				this.onResolvedCallback.forEach((fn) => fn());
			}
		};
		// 将状态更改为异常 reject 并执行失败的回调函数
		let reject = (reason) => {
			if (this.status === PENDING) {
				this.reason = reason;
				this.status = REJECTED;
				this.onRejectedCallback.forEach((fn) => fn());
			}
		};
		// 执行传递进来的函数 若发生异常 则调用reject
		try {
			executor(resolve, reject);
		} catch (err) {
			reject(err);
		}
	}
	// 接收两个参数 成功的回调和失败的回调
	then(onFulfilled, onRejected) {
		// 防止then中没有回调函数 (v)=>v会将value返回给下一个then
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v;
		// 防止catch没有回调函数 err=>throw err抛出异常
		onRejected =
			typeof onRejected === 'function'
				? onRejected
				: (err) => {
						throw err;
				  };
		// then方法返回一个promise对象 为的是链式调用
		let promise = new MyPromise((resolve, reject) => {
			if (this.status === FULFILLED) {
				setTimeout(() => {
					try {
						let result = onFulfilled(this.value);
						resolvePromise(promise, result, resolve, reject);
					} catch (err) {
						reject(err);
					}
				}, 0);
			}
			if (this.status === REJECTED) {
				setTimeout(() => {
					try {
						let result = onRejected(this.reason);
						resolvePromise(promise, result, resolve, reject);
					} catch (err) {
						reject(err);
					}
				}, 0);
			}
			if (this.status === PENDING) {
				this.onResolvedCallback.push(() => {
					setTimeout(() => {
						try {
							let result = onFulfilled(this.value);
							resolvePromise(promise, result, resolve, reject);
						} catch (err) {
							reject(err);
						}
					}, 0);
				});
				this.onRejectedCallback.push(() => {
					setTimeout(() => {
						try {
							let result = onRejected(this.reason);
							resolvePromise(promise, result, resolve, reject);
						} catch (err) {
							reject(err);
						}
					}, 0);
				});
			}
		});
		return promise;
	}
}

let p = new MyPromise(function (resolve, reject) {
	setTimeout(() => {
		// console.log('test');
		resolve('OK');
	}, 0);
});
// console.log(p);
p.then((data) => {
	console.log(data);
	return 'OK2';
}).then((data) => {
	console.log(data);
});

console.log('ASYNC');
