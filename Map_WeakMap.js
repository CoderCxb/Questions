// 要想手动进行垃圾回收 则需要在命令行添加 --expose-gc
// node --expose-gc Map_WeakMap.js
let m = new Map();
m.set('key', 'value');
console.log(m.get('key'));
m.delete('key');
m.clear();
console.log(m.has('key'));
console.log(m.size);

global.gc();
console.log(
	'已经使用的内存:' +
		(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
		'MB'
);

const wm = new WeakMap();
let key = {};
wm.set(key, new Array(1024 * 1024));
global.gc();
console.log(
	'已经使用的内存:' +
		(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
		'MB'
);

key = null;
global.gc();
console.log(
	'已经使用的内存:' +
		(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
		'MB'
);
