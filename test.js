class _LazyMan {
	queue = [];
	name;
	constructor(name) {
		this.name = name;
		this.sayName(name);
		Promise.resolve().then(() => {
			console.log(this.queue);
			let sequence = Promise.resolve();
			this.queue.forEach((item) => {
				// sequence = sequence.then(item);
				item();
			});
		});
	}

	sayName(name) {
		this.queue.push(() => {
			console.log(`Hi! this is ${name}!`);
		});
		return this;
	}

	eat(meal) {
		console.log('push eat');
		this.queue.push(() => {
			console.log(`eat ${meal}`);
		});
		return this;
	}

	_holdOn(time) {
		return () =>
			// new Promise((resolve) => {
			setTimeout(() => {
				console.log(`Wake up after ${time} second`);
				// resolve();
			}, time * 1000);
		// });
	}

	sleep(time) {
		this.queue.push(this._holdOn(time));
		return this;
	}

	sleepFirst(time) {
		this.queue.unshift(this._holdOn(time));
		return this;
	}
}

const LazyMan = (name) => new _LazyMan(name);

LazyMan('Hank').sleepFirst(2).eat('dinner').sleep(3).eat('supper');
