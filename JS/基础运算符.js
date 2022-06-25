// 1. +作为一元运算符时 相当于Number()
console.log(+'11'); // 11
console.log(+'x'); // NaN
console.log(+null); // 0
console.log(+undefined); // NaN

// 2.** 求幂
console.log(2 ** 2);

// 3. 赋值运算符是有返回值的
let num;
console.log((num = 10)); // 10

// 4.逗号运算符  一般配合()使用 返回最后一个值
let num2 = (1, 2, 3, 4);
console.log(num2);

// 5. - / * 可以将前后字符串都转成数值 会忽略前后空格
console.log(' 4 ' / '2'); // 2
console.log('3' * '6');

// 6. >= 先转成数值再比较
console.log(null >= 0);

// 7. undefined和null非严格相等
console.log(undefined == null);
