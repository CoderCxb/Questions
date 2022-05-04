//  定义常量
const FULFILLED = "fulfilled";
const PENDING = "pending";
const REJECTED = "rejected";

// 四个参数(then返回的promise,then返回的结果,resolve处理函数,reject处理函数)
// 这个函数的主要用途就是根据这几个参数 决定是resolve还是reject
// 是用来做特殊情况处理的
// const resolvePromise = (promise, result, resolve, reject) => {
// 	// 自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise  Promise/A+ 2.3.1
// 	if (promise === result) {
// 		return reject(
// 			new TypeError('Chaining cycle detected for promise #<Promise>')
// 		);
// 	}
// 	// Promise/A+ 2.3.3.3.3 只能调用一次
// 	let called;
// 	// 后续的条件要严格判断 保证代码能和别的库一起使用
// 	if ((typeof result === 'object' && result != null) || typeof result === 'function') {
// 		try {
// 			// 为了判断 resolve 过的就不用再 reject 了（比如 reject 和 resolve 同时调用的时候）  Promise/A+ 2.3.3.1
// 			let then = result.then;
// 			if (typeof then === 'function') {
// 				// 不要写成 result.then，直接 then.call 就可以了 因为 result.then 会再次取值，Object.defineProperty  Promise/A+ 2.3.3.3
// 				then.call(
// 					result,
// 					(y) => {
// 						// 根据 promise 的状态决定是成功还是失败
// 						if (called) return;
// 						called = true;
// 						// 递归解析的过程（因为可能 promise 中还有 promise） Promise/A+ 2.3.3.3.1
// 						resolvePromise(promise, y, resolve, reject);
// 					},
// 					(r) => {
// 						// 只要失败就失败 Promise/A+ 2.3.3.3.2
// 						if (called) return;
// 						called = true;
// 						reject(r);
// 					}
// 				);
// 			} else {
// 				// 如果 result.then 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.3.4
// 				resolve(result);
// 			}
// 		} catch (e) {
// 			// Promise/A+ 2.3.3.2
// 			if (called) return;
// 			called = true;
// 			reject(e);
// 		}
// 	} else {
// 		// 如果 result 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.4
// 		resolve(result);
// 	}
// };

// Promise的链式调用是通过返回一个新的Promise实现的 所以每个Promise只对应一个then
// 因此可以不用数组存储回调函数的
// 异步resolve时 先执行then中的pending添加回调 再执行resolve
// 同步resolve时 直接执行resolve 此时数组为空 所以没什么太大意义， 然后执行then中的fulfilled 直接执行传入的函数

class MyPromise {
  // 构造函数
  constructor(executor) {
    // 初始化Promise的状态、value和reason
    this.status = PENDING; // 状态
    this.value = undefined; // 成功传递的值
    this.reason = undefined; // 失败的原因

    // promise实例的then中的回调函数
    this.onResolvedCallback = null;

    // promise实例的catch中的回调函数(也可以是then传入的第二个回调函数)
    this.onRejectedCallback = null;

    // resolve
    let resolve = (value) => {
      if (this.status === PENDING) {
        // 设置status为FULFILLED以及value
        this.status = FULFILLED;
        this.value = value;
        // resolve是异步执行时, then的函数在此处执行
        this.onResolvedCallback && this.onResolvedCallback();
      }
    };
    // reject
    let reject = (reason) => {
      if (this.status === PENDING) {
        // 设置状态和
        this.status = REJECTED;
        this.reason = reason;
        // reject为异步执行时, catch的函数在此处执行
        this.onRejectedCallback && this.onRejectedCallback();
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
  // then中的方法都需要使用queueMicrotask来实现微任务,否则会导致then都是同步
  then(onFulfilled, onRejected) {
    // 防止then中没有回调函数 设置默认函数 (v)=>v会将value返回给下一个then
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };
    // then方法返回一个promise对象 为的是链式调用
    let promise = new MyPromise((resolve, reject) => {
      const microtaskResolve = () => {
        queueMicrotask(() => {
          try {
            // 直接调用传入的函数并获取return的值
            let result = onFulfilled(this.value);
            // resolvePromise(promise, result, resolve, reject);
            // 调用要返回的promise对象的resolve方法,并传递onFulfilled执行的结果
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });
      };
      const microtaskReject = () => {
        queueMicrotask(() => {
          try {
            // 直接调用传入的函数并获取return的值
            let result = onRejected(this.reason);
            // resolvePromise(promise, result, resolve, reject);
            // 调用要返回的promise对象的reject方法,并传递onRejected执行的结果
            reject(result);
          } catch (err) {
            reject(err);
          }
        });
      };
      // 如果resolve是同步执行的,那么then执行时, status已经变成了FULFILLED
      if (this.status === FULFILLED) {
        microtaskResolve();
      }
      // 如果reject是同步执行的,那么then执行时, status已经变成了REJECTED
      if (this.status === REJECTED) {
        microtaskReject();
      }
      // 当resolve是异步的时候, 需要将then和catch要执行的函数存储起来
      if (this.status === PENDING) {
        this.onResolvedCallback = microtaskResolve;
        this.onRejectedCallback = microtaskReject;
      }
    });
    return promise;
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  // Promise.all 接收promise数组,如果全部resolve,则返回结果,只要有一个失败,则reject
  // 返回值是一个Promise
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      // 1. 使用数组 存储结果
      let result = [];
      // 2. promise数组为空 直接返回[]作为结果
      if (promises.length === 0) resolve(result);
      // 3. 遍历promise数组
      promises.forEach((promise) => {
        // 4. 如果是promise,则直接使用,否则使用Promise.resove包装成Promise
        promise =
          promise instanceof MyPromise ? promise : MyPromise.resolve(promise);
        // 5. 注意点来了 同步定义then和catch 因为如果是.then.catch 那么catch就是在第二层的微任务队列 会导致catch晚一轮输出结果
        promise.then((res) => {
          result.push(res);
          if (result.length === promises.length) {
            resolve(result);
          }
        });
        promise.catch((err) => {
          reject(err);
        });
      });
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise =
          promise instanceof MyPromise ? promise : MyPromise.resolve(promise);
        promise.then((res) => {
          resolve(res);
        });
        promise.catch((err) => {
          reject(err);
        });
      });
    });
  }

  static resolve(value) {
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
}

let p = new MyPromise((resolve) => {
  resolve("111");
})
  .then((res) => {
    console.log(res);
    return "222";
  })
  .then((res) => {
    console.log(res);
  });
