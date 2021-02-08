// 函数记忆 即参数相同时 直接返回之前的结果
// 在原型中 根据参数存储相应的结果 如果已经存在 则直接使用 如果不存在 则进行计算
var memoize = function(func, hasher) {
    var memoize = function(key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    memoize.cache = {};
    return memoize;
};

function add(a,b){
    console.log("add执行");
    return a+b;
}

var newAdd=memoize(add);
console.log(newAdd(1,2));
console.log(newAdd(1,2));