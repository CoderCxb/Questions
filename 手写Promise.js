const FULFILLED = 'fulfilled';
const PENDING = 'pending';
const REJECTED = 'rejected';
class Promise {
	status = PENDING;
	value = undefined;
	reason = undefined;
	onResolvedCallback = [];
	onRejectedCallback = [];
	constructor(executor) {
		function resolve(value) {
			this.status = FULFILLED;
			this.value = value;
			this.onResolvedCallback.forEach((fn) => fn(self.value));
		}
		function reject(reason) {
			if (this.status === PENDING) {
				this.reason = reason;
				this.status = REJECTED;
				this.onRejectedCallback.forEach((fn) => fn(this.reason));
			}
		}
		try {
			executor(resolve, reject);
		} catch (err) {
			reject(err);
		}
	}
	then(onFulfilled, onRejected) {
		let promise = new Promise(function () {
			if (this.status === FULFILLED) {
				onFulfilled(this.value);
				// self.onResolvedCallback.forEach((fn) => fn(self.value));
			}
			if (self.status === REJECTED) {
				onRejected(this.reason);
				// self.onRejectedCallback.forEach((fn) => fn(self.reason));
			}
			if (this.status === PENDING) {
				this.onResolvedCallback.push(() => {
					onFulfilled(this.value);
				});
				this.onRejectedCallback.push(() => {
					onRejected(this.reason);
				});
			}
		});
		return promise;
	}
}
function MyPromise(executor) {
	var self = this;
	self.status = PENDING;
	self.value = undefined;
	self.reason = undefined;
	self.onResolvedCallback = [];
	self.onRejectedCallback = [];
	function resolve(value) {
		if (self.status === PENDING) {
			self.status = FULFILLED;
			self.value = value;
			self.onResolvedCallback.forEach((fn) => fn(self.value));
		}
	}

	function reject(reason) {
		if (self.status === PENDING) {
			self.reason = reason;
			self.status = REJECTED;
			self.onRejectedCallback.forEach((fn) => fn(self.reason));
		}
	}
	try {
		executor(resolve, reject);
	} catch (err) {
		reject(err);
	}
	MyPromise.prototype.then = function (onFulfilled, onRejected) {
		try {
			var self = this;
			var promise = new MyPromise(function (resolve, reject) {
				if (self.status === FULFILLED) {
					onFulfilled(self.value);
					// self.onResolvedCallback.forEach((fn) => fn(self.value));
				}
				if (self.status === REJECTED) {
					onRejected(self.reason);
					// self.onRejectedCallback.forEach((fn) => fn(self.reason));
				}
				if (self.status === PENDING) {
					self.onResolvedCallback.push(() => {
						onFulfilled(self.value);
					});
					self.onRejectedCallback.push(() => {
						onRejected(self.reason);
					});
				}
			});
			return promise;
		} catch (reason) {
			this.reason = reason;
		}
	};
	MyPromise.prototype.catch = function (onRejected) {
		if (self.status === REJECTED) {
			return new MyPromise(function (resolve, reject) {
				onRejected(self.reason);
				// reject(self.reason);
			});
		}
	};
}

let p = new MyPromise(function (resolve, reject) {
	console.log('直接执行的代码');
	// setTimeout(() => {
	// 	console.log('setTimeout');
	// });
	setTimeout(() => {
		resolve(0);
	}, 0);
	// reject('error');
});

let p2 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve(0);
	}, 0);
});
p.then((data) => {
	console.log(data);
	return 100;
})
	.then((data) => {
		console.log(data);
		return 200;
	})
	.catch((err) => {
		console.log(err);
	});
// .then((data) => {
// 	console.log(data);
// });

// let p3 = p2.then((value) => 100).then((value) => console.log(value));
