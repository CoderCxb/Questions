let obj = {};
Object.defineProperty(obj, 'name', {
	value: 'marco',
	writable: false,
});

Object.seal(obj);

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// obj.name = 'xxx';
Object.defineProperty(obj, 'name', {
	value: 'polo',
	writable: true,
});
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
