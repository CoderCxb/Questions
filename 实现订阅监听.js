class EventEmitter {
	_events = new Map();
	defaultMaxListeners = 10;
	// 同on方法
	addListener = this.on;
	// 返回监听的事件名
	eventNames = function () {
		return Object.keys(this._events);
	};
	// 设置最大监听数
	setMaxListeners = function (n) {
		this._maxListeners = n;
	};
	// 返回监听数
	getMaxListeners = function () {
		return this._maxListeners ? this._maxListeners : this.defaultMaxListeners;
	};
	on(type, callback) {
		let events = this._events.get(type);
		if (events) {
			events.push(callback);
			this._events.set(type, events);
		} else {
			this._events.set(type, [callback]);
		}
	}
	once(type, callback) {
		let events = this._events.get(type);
		let newCallback = () => {
			callback();
			this.removeListener(type, newCallback);
		};
		if (events) {
			events.push(newCallback);
			this._events.set(type, events);
		} else {
			this._events.set(type, [newCallback]);
		}
	}
	removeListener(type, callback) {
		let index = this._events.get(type).findIndex(function (value, index) {
			return value === callback ? index : value;
		});
		if (index !== -1) {
			console.log(index);
			this._events.get(type).splice(index, 1);
		}
	}
	removeAllListener(type) {
		this._events.set(type, []);
	}
	listeners(type) {
		return this._events[type];
	}
	emit(type, ...args) {
		let events = this._events.get(type);
		console.log(events);
		events.forEach((callback) => {
			console.log(callback.toString());
			callback();
		});
	}
}

let e = new EventEmitter();
e.once('getList', function () {
	console.log('获取列表1');
});
e.once('getList', function () {
	console.log('获取列表2');
});

e.once('getList', function () {
	console.log('获取列表3');
});
console.log(e._events);
e.emit('getList');
// e.emit('getList');
// console.log(e);
