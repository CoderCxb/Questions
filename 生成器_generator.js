// 1. yield 没有返回值 即 yield输出或作为参数时 是undefined 因此可以通过next()传递参数 作为上一次退出的yield的返回值
// 2. fn(yield 1, yield 2); 这种情况时 next3次才会执行函数 前两次next执行了yield就退出了
// 3. console.log('Hello'+(yield 1)); 当处在表达式中时 需要使用()包裹
// 4. yield没有返回值 因此可以在next时传递参数 作为这次yield的返回值
// 5. 如果一次next都还没调用 则没有进入生成器函数 这时使用throw方法 则是被外部的异常处理捕获 而不是生成器捕获
// 6. 如果 yield* 一个生成器函数,如果这个生成器函数有返回值 则yield也有返回值
// 7. 生成器函数返回的总是 生成器，因此无法照常使用this，可以通过在外部定义一个对象 使用call等方法修改this指向这个对象，那么生成器中修改this就是修改这个对象了
// 8. 生成器函数无法和new一起使用 因为他不是构造函数

// next、throw、return本质上是替换yield语句
// next()   将yield替换成一个值
// throw()  将yield替换为一个异常
// return() 将yield替换为return语句

function* generatorFn() {
	// 使用throw抛出异常 如果在生成器中处理了异常 则仅仅是跳过本次yeild 如果没有处理 则直接结束
	// 注意：throw被catch捕获 并不会退出生成器函数 而是会继续往下找yeild 所以找到了11 所以 throw打印的是 value:11,done:false
	try {
		// 生成器在遇到yeild之前 就是个正常函数
		// return会终止生成器
		for (let index = 0; index < 5; index++) {
			yield index;
			// if(index==2)return index;
		}
	} catch (e) {
		console.log(e);
	}
	//  可以使用yeild* 可迭代对象
	yield* [11, 22, 33];
	// yeild需要直接属于generator函数 不能嵌套包裹在其他函数中
	// (function(){yield 1})()
}

let generator = generatorFn();
// generator类似迭代器 也有next、return、throw
// next方法的返回值也是{done:true,value:xxx}
// 注意：通过yeild退出的done为false  return退出的 done为true
// generator上有上有三个方法 next、return、throw
// 使用return 则后续的done都为true value都为undefined
// console.log(generator);
// for (let i of generator){
//   console.log(i);
// }

console.log(generator.next());
console.log(generator.throw('err'));
console.log(generator.next());

// 生成器作为默认的迭代器
let arr = [1, 2, 3];
arr[Symbol.iterator] = function* () {
	console.log(this.values());
	yield* this.values();
};
console.log(...arr);
