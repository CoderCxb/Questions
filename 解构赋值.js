// 1. 数组解构忽略空元素
let arr = ['marco', 'jack', 'kitty'];
let [m, , k] = arr;
console.log(m, k); // marco kitty

// 2. 右侧可以是任何可迭代对象
let [a, b, c] = 'abc';
console.log(a, b, c); // a b c

// 3. 赋值给等号左侧的任何内容
let user = {};
[user.name, user.surname] = 'Ilya Kantor'.split(' ');
console.log(user.name); // Ilya

// 4. 交换变量值
let guest = 'I';
let admin = 'He';
[guest, admin] = [admin, guest];
console.log('guest:', guest, '  ', 'admin:', admin); // guest: He    admin: I

// 5. 剩余参数和默认值(未添加默认值的话 默认是undefined)
let [m2 = 'default', ...rest] = arr;
console.log(rest); // [ 'jack', 'kitty' ]

// 6. 对象解构匹配模式
let options = {
	width: 100,
	height: 100,
	color: 'red',
	info: { type: 'OK' },
	other: 'nothing',
};
// 相当于 let { width:width, height:height, color:color } = options;
// 前一个height对应options中的属性 h是声明的变量
let {
	width,
	height: h,
	color,
	info: { type: t }, // 解构嵌套
	...rest2 // 解构剩余的参数
} = options;
console.log(width, h, color, t, rest2); //100 100 red OK { other: 'nothing' }

// 7.需要使用声明修饰符 var、let、const 或者使用() 但是得确保变量已声明
let person = { lang: 'chinese' };
let lang;
({ lang } = person);
console.log(lang); // chinese

// 8. 当函数参数较多时使用
// 需要给整个传入的对象一个默认值 避免外部没有传递参数进来 {}={}
function doSomething({ who = 'I', doing = 'speaking', what = 'chinse' } = {}) {
	console.log(`${who} ${doing} ${what}`); // I speaking chinse
}
doSomething();
