// 组合继承
// 综合了原型链继承和构造函数继承的方法,将两者的优点结合到一起
function SuperType(sup) {
	this.sup = sup;
}
SuperType.prototype = {
	type: 'SuperType',
	log(){
		console.log('Log');
	}
};

function SubType() {
	// 盗用构造函数形式
	SuperType.call(this, 'Super Value'); // 能够传递参数
}

// 1.SuperType的实例拿去赋值是比较差的选择 但是其他方式也都有问题 所以旧版本一般使用这种方式
// SubType.prototype = new SuperType();
// Object.setPrototypeOf(SubType.prototype, new SuperType()); 

// 2. __proto__有兼容性问题
// SubType.prototype.__proto__ = SuperType.prototype;

// 3. setPrototypeof ES6新增的语法,支持ES6时的推荐写法
Object.setPrototypeOf(SubType.prototype, SuperType.prototype);

let s = new SubType();
console.log(s); // SubType { sup: 'Super Value' }

// 原型链继承完整,原型链上包含SubType和SuperType的原型
console.log(s instanceof SubType);  // true
console.log(s instanceof SuperType); // true

// 访问父类原型上的属性和方法
console.log(s.type); // SuperType
s.log(); // Log

// 父类的实例属性也绑定到子类实例上
console.log(s.sup);


