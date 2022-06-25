// 1. Array.from和Array.of
// Array.from接收一个可迭代对象  第二个参数 相当于map 第三个参数为this对象 
// Array.of接收多个参数 然后生成一个数值
console.log(Array.from('abc',(v)=>v+v));   // [ 'aa', 'bb', 'cc' ]
console.log(Array.of(1,2,3));              // [ 1, 2, 3 ]

// 2.数组空位 像map什么的遍历时 会跳过空位 因此尽量避免使用 
let emptyArr=[1,,];
console.log(emptyArr,emptyArr.length);

// 3. length属性 不是只读属性 可以通过修改length来改变数组
emptyArr.length-=1;
console.log(emptyArr);

// 4.判断数组
console.log(Array.isArray(emptyArr));
console.log(emptyArr instanceof Array);
console.log(Object.prototype.toString.call(emptyArr));

// 5.迭代器方法
let arr=[1,2,3,4,5];
console.log([...arr.keys()]);    // 获取索引 [ 0, 1, 2, 3, 4 ]
console.log([...arr.values()]);  // 获取值   [ 1, 2, 3, 4, 5 ]
console.log([...arr.entries()]); // 获取键值对 [[0,1],[1,2],[2,3],[3,4],[4,5]]

// 6.复制和填充方法
// 6.1 fill('填充物',start,end) 使用填充物填充数组
arr.fill(1,0,2)
// console.log(arr);
// 6.2 copyWithin(insertIndex,start,end) 拷贝start~end的值插入到insertIndex位置去
arr.copyWithin(0,3,5)
console.log(arr);

// 7.转换方法
// undefined和null在转换时 会变成空
console.log(arr.toString());   // 转换成字符串
console.log(arr.valueOf());    // 直接返回 不改变类型
console.log(arr.join('-'));    // 返回用指定字符拼接的字符串 

// 8.栈方法:后进先出  push和pop
arr.push(6) // 末尾添加元素
arr.pop()   // 删除末尾元素

// 9.队列方法 先进先出 push和shift
arr.push(7)
arr.shift()
// 也可以用 unshift和pop模拟反向的队列

// 10.排序方法
arr.reverse()    // 反向排序
arr.sort((pre,next)=>pre-next)

// 11. 操作方法
// 11.1 concat(...iteratorable) 默认会打平接收的数组进行拼接 
// 可以设置[Symbol.isConcatSpreadable]=false 阻止默认打平
let arr2=arr.concat(1,2,[9]) // [arr,1,2,[9]]

// 11.2 slice(start,end) 截取数组元素(start~end-1) 创建新数组
let arr3=arr.slice(0,5)

// 11.3 splice(start: number, deleteCount?: number,...items) 
// 删除start开始deleteCount个元素 并在start开始 插入items 
// 注意：删除的个数和添加的个数不需要一样
let arr4=arr.splice(0,2,...[1,2,3])

// 11.4 搜索和位置函数
console.log(arr.includes(1));      // true 判断是否包含
console.log(arr.indexOf(1));       // 找到元素第一次出现的下标   找不到返回-1 
console.log(arr.lastIndexOf(1));   // 找到元素最后一次出现的索引 找不到返回-1 

// 自定义搜索和位置断言函数注意：匹配到一个以后就停止匹配 
console.log(arr.find((item,index,array)=>{
  return item%2==1;
}));
console.log(arr.findIndex((item,index,array)=>{
  return item%2==1
}));

// 12.迭代方法 接收的参数都是(item,index,array)  item:项 index:索引 array:数组
// 1) every  :对数组的每一项都传入运行函数，如果每一项都返回true 则这个方法返回true
// 1) some   :对数组的每一项都传入运行函数，如果有一项都返回true 则这个方法返回true
// 1) filter :对数组的每一项都传入运行函数，函数返回true的项会返回 形成一个新数组
// 1) forEach:对数组的每一项都传入运行函数，仅仅只是遍历 没有返回值
// 1) map    :对数组的每一项都传入运行函数，返回每次调用函数的结果作为返回值
console.log(arr.every((item,index,array)=>{return true}));
console.log(arr.some((item,index,array)=>{return false}));
console.log(arr.filter((item,index,array)=>{return true}));
arr.forEach((item,index,array)=>{
  // 遍历每一项 执行操作
});
console.log(arr.map((item,index,array)=>{return item*2}));

// 13.归并方法
// 注意：第一次迭代的起点是第二项 因此 第一次迭代的prev为第一项 后续的prev是前一次执行的返回值 
// prev:上一次执行结果 cur:当前项 index:当前项索引 array:数组
console.log(arr.reduce((prev,cur,index,array)=>{
  console.log(prev);
  return prev+cur;
}));

