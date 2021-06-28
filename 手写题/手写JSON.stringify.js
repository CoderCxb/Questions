function objToString(obj, keyArr) {
	let result = '{';
	const keys = Object.keys(obj);
	for (let index = 0; index < keys.length; index++) {
		let key = keys[index];
		let char = index < keys.length && index != 0 ? ',' : '';
		if (obj[key] === undefined) {
		} else if (typeof obj[key] === 'object' && obj[key] !== null) {
			if (!keyArr || (keyArr && keyArr.includes(key))) {
				result += char + `"${key}"` + ':' + `${objToString(obj[key])}`;
			}
		} else {
			let value = obj[key];
			let valueType = typeof obj[key];
			let valueStr =
				valueType === 'string'
					? `"${value}"`
					: value === null
					? 'null'
					: `${value}`;
			if (!keyArr || (keyArr && keyArr.includes(key))) {
				result += char + `"${key}"` + ':' + valueStr;
			}
		}
	}
	return result + '}';
}

function arrToJson(arr) {
	let result = '[';
	for (let index = 0; index < arr.length; index++) {
		if (index !== 0 && index < arr.length) {
			result += ',' + JSS(arr[index]);
		} else {
			result += '' + JSS(arr[index]);
		}
	}
	return result + ']';
}

function JSS(obj, keyArr) {
	const type = Object.prototype.toString.apply(obj);
	switch (type) {
		case '[object Array]':
			return `${arrToJson(obj)}`;
		case '[object Object]':
			return `${objToString(obj, keyArr)}`;
		case '[object Number]':
		case '[object Boolean]':
		case '[object String]':
			return obj.toString();
		case '[object Undefined]':
		case '[object Function]':
			return undefined;
		default:
			break;
	}
	return '';
}

// console.log(
// 	JSS(
// 		{
// 			name: 'xxx',
// 			age: 12,
// 			info: { a: null, b: undefined, c: true, d: 111 },
// 		},
// 		['a', 'name']
// 	)
// );
// console.log(
// 	JSON.stringify(
// 		{
// 			name: 'xxx',
// 			age: 12,
// 			info: { a: null, b: undefined, c: true, d: 111 },
// 		},
// 		['a', 'name']
// 	)
// );

let obj={
	[Symbol.](){
		return undefined;
	}
}

console.log(JSS([1, 2, { a: null, b: undefined, c: true, d: 111 }]));
console.log(JSON.stringify([1, 2, { a: null, b: undefined, c: true, d: 111,e:()=>{},r:obj}]));
