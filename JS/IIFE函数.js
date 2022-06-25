// IIFE 立即执行函数表达式
// 1.IIFE变量名只读  无法修改
(function IIFE() {
	IIFE = 100; // 无法修改
	console.log(IIFE);
})();
