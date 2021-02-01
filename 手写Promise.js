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
	status = PENDING;
	value = undefined;
	reason = undefined;
	onResolvedCallback = [];
	onRejectedCallback = [];
	constructor(executor) {
		let resolve = (value) => {
			this.status = FULFILLED;
			this.value = value;
			this.onResolvedCallback.forEach((fn) => fn(this.value));
		};
		let reject = (reason) => {
			if (this.status === PENDING) {
				this.reason = reason;
				this.status = REJECTED;
				this.onRejectedCallback.forEach((fn) => fn(this.reason));
			}
		};
		try {
			executor(resolve, reject);
		} catch (err) {
			reject(err);
		}
	}
	then(onFulfilled, onRejected) {
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v;
		onRejected =
			typeof onRejected === 'function'
				? onRejected
				: (err) => {
						throw err;
				  };
		let promise = new MyPromise((resolve, reject) => {
			if (this.status === FULFILLED) {
				// console.log(result);
				// this.onResolvedCallback.push(resolve.bind(this, result));
				// this.onResolvedCallback.forEach((fn) => fn(this.value));
				setTimeout(() => {
					let result = onFulfilled(this.value);
					// console.log('promise:', promise);
					// console.log('result:', result);
					resolve(result);
				});
			}
			if (this.status === REJECTED) {
				// let result = onRejected(this.reason);
				// console.log(result);
				// this.onRejectedCallback.push(reject.bind(this, result));
				// this.onRejectedCallback.forEach((fn) => fn(this.reason));
				setTimeout(() => {
					let result = reject(this.reason);
					// resolve(result);
				});
			}
			if (this.status === PENDING) {
				this.onResolvedCallback.push(() => {
					setTimeout(() => {
						let result = onFulfilled(this.value);
						resolve(result);
					});
				});
				this.onRejectedCallback.push(() => {
					setTimeout(() => {
						reject(this.reason);
					});
				});
			}
		});
		return promise;
	}
	catch(onReject) {
		if (this.status === REJECTED) {
			onReject(this.reason);
		}
	}
}

let p = new MyPromise(function (resolve, reject) {
	// setTimeout(() => {
	// console.log('test');
	resolve('OK');
	// }, 0);
});
p.then((data) => {
	console.log(data);
	return 'Nice';
}).then((data) => {
	console.log(data);
});
// .catch((err) => {
// 	console.log('err:', err);
// });
// .then((data) => {
// 	console.log(data);
// });
console.log('ASYNC');
// let p3 = p2.then((value) => 100).then((value) => console.log(value));
