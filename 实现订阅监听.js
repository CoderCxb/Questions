class EventEmitter {
	_events = new Map();
	s=new Set()
	_defaultMaxListeners = 10;
	_maxListeners;
	// 同on方法
	addListener = this.on;
	removeListener=this.off;
	// 返回监听的事件名
	eventNames() {
		return [...this._events.keys()];
	};
	// 设置最大监听数
	setMaxListeners (n) {
		this._maxListeners = n;
	};
	// 返回监听数
	getMaxListeners = function () {
		return this._maxListeners ? this._maxListeners : this._defaultMaxListeners;
	};
	on(type, callback) {
		let events = this._events.get(type);
		if (events) {
			if(events.size>=this.getMaxListeners()){
				console.warn('最大事件监听数1:',this.getMaxListeners());
			}else{
				this._events.set(type, events.add(callback));
			}
		} else {
			this._events.set(type, new Set([callback]));
		}
	}
	once(type, callback) {
		let events = this._events.get(type);
		let newCallback = () => {
			callback();
			this.removeListener(type, newCallback);
		};
		if (events) {	
			console.log(events.size,this.getMaxListeners());
			if(events.size>=this.getMaxListeners()){
				console.warn('最大事件监听数2:',this.getMaxListeners());
			}else{
				events.add(newCallback);
				this._events.set(type, events);
			}
		} else {
			this._events.set(type, new Set([newCallback]));
		}
	}
	off(type, callback) {
		let events=this._events.get(type)
		if(events){
			events.delete(callback)
		}
		return this;
	}
	removeAllListener(type) {
		if(type){
			this._events.delete(type);
		}else{
			this._events.clear()
		}
		return this;
	}
	listeners(type) {
		return [...this._events.get(type)];
	}
	emit(type, ...args) {
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
e.once('getList', function () {
	console.log('获取聊天列表');
});

e.emit('getList');
e.emit("connect",'Success！！')
console.log(e.listeners('connect'));
console.log(e.eventNames());
e.removeAllListener('connect')
console.log(e.eventNames());