// 没有参数的时候的返回值
// console.log(Math.max());  // -Infinity
// console.log(Math.min());  // Infinity
console.log(Math.min()>Math.max()); // true

// max和min无法接收数组 可以通过下面几种方式将数组传入
// 1.循环传入
var arr = [6, 4, 1, 8, 2, 11, 23];
var result = arr[0];
for (var i = 1; i < arr.length; i++) {
    result =  Math.max(result, arr[i]);
}
console.log(result);

// 2.reduce方法
console.log(arr.reduce(function(pre,next){
    return Math.max(pre,next)
}));

// 3.先排序 再去最大值
var sortArr=arr.sort(function(pre,next){
    return pre-next;
})
console.log(sortArr[sortArr.length-1]);

// 接下去的方法是将数组解构
// 4.eval 
eval("console.log(Math.max("+arr+"))")

// 5.apply 
console.log(Math.max.apply(null,arr));

// 6 ...扩展运算符
console.log(Math.max(...arr));