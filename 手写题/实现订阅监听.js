class EventEmitter {
	// 1. 使用Map存储事件,key为事件类型,value是一个存储事件监听回调函数的Set
	_events = new Map();
	// 2. 默认最大监听数
	_defaultMaxListeners = 10;
	// 3. 最大监听数
	_maxListeners;
	// 4. 添加监听,同on方法
	addListener = this.on;
	// 5. 移除事件监听,同off方法
	removeListener=this.off;
	// 6. 返回监听的所有事件名
	eventNames() {
		return [...this._events.keys()];
	};
	// 7. 设置最大监听数
	setMaxListeners (n) {
		this._maxListeners = n;
	};
	// 8. 获取最大监听数
	getMaxListeners = function () {
		return this._maxListeners ? this._maxListeners : this._defaultMaxListeners;
	};
	// 9. 添加事件监听 type为事件类型,callback为事件回调
	on(type, callback) {
		// 10. 先获取type对应的事件
		let events = this._events.get(type);
		// 11. 事件存在
		if (events) {
			// 12. 事件的监听数已经达到最大值,发出警告
			if(events.size>=this.getMaxListeners()){
				console.warn('最大事件监听数1:',this.getMaxListeners());
			}else{
			// 13. 继续往事件的Set中添加事件
				this._events.set(type, events.add(callback));
			}
			// 14. 事件不存在,创建Set存储type对应的事件
		} else {
			this._events.set(type, new Set([callback]));
		}
	}
	// 15. 只触发一次的回调函数,将回调进行包装,使其执行完之后马上会被移除
	once(type, callback) {
		// 16. 获取type对应的所有事件
		let events = this._events.get(type);
		// 17. 包装回调函数,回调执行完毕后会被移除
		let onceCallback = () => {
			callback();
			this.removeListener(type, onceCallback);
		};
		// 18. 事件存在
		if (events) {
			// 19. 事件的监听数已经达到最大值,发出警告
			if(events.size>=this.getMaxListeners()){
				console.warn('最大事件监听数2:',this.getMaxListeners());
			}else{
				// 20. 继续往事件的Set中添加事件
				this._events.set(type, events.add(onceCallback));
			}
		} else {
			// 21. 事件不存在,创建Set存储type对应的事件
			this._events.set(type, new Set([onceCallback]));
		}
	}
	// 22. 移除指定type和callback的事件监听
	off(type, callback) {
		let events=this._events.get(type)
		if(events){
			events.delete(callback)
		}
		return this;
	}
	// 23. 移除type的所有事件监听
	removeAllListener(type) {
		if(type){
			this._events.delete(type);
		}else{
			this._events.clear()
		}
		return this;
	}
	// 24. 获取所有事件监听函数
	listeners(type) {
		let listeners = this._events.get(type);
		listeners = listeners ? listeners : [];
		return [...listeners];
	}
	// 25. 触发type类型事件 并传递参数
	emit(type, ...args) {
		// 26. events是一个回调函数的Set集合
		let events = this._events.get(type);
		for(let event of events){
			event(...args)
		}
	}
}

let e = new EventEmitter();
e.on('connect',function(value){
	console.log('连接服务器,接收的值:',value);
})
e.on('getList',function(value){
	console.log('获取聊天列表1');
})
e.once('getList', function () {
	console.log('获取聊天列表2');
});

// e.emit('getList');
// e.emit('getList');
e.emit("connect",'Success！！')
console.log(e.listeners('getList'));
// console.log(e.listeners('connect'));
// console.log(e.eventNames());
// e.removeAllListener('connect')
// console.log(e.eventNames());