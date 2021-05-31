// 1.定型数组是ECMAScript新增的解构，目的是提升向原生库传输数据的效率
// ArrayBuffer是所有定型数组及视图引用的基本单位
// ArrayBuffer代表存储二进制数据的一段内存 不能直接读写

// 一经创建 无法修改 但是可以通过slice切割并返回新的ArrayBuffer
let buf = new ArrayBuffer(16);
console.log(buf); // ArrayBuffer{[Uint8Contents]:<....>,byteLength:16}

// 判断对象是否是TypedArray或DateView的实例
console.log('ArrayBuffer.isView(buf):', ArrayBuffer.isView(buf));

// 失败会抛出异常、分配的内存不能超过Number.MAX_SAFE_INTEGER、会被自动回收，不需要手动释放

// 2. DateView
// 允许读写ArrayBuffer的视图，专门为文件I/O和网络I/O设计，AP支持对缓冲数据的高度控制，但是相较于其他视图 性能差一些，对于缓冲内容没有预设 也不能迭代。必须对已有的ArrayBuffer读取和写入时才能创建DateView实例。
//                     (ArrayBuffer,偏移量,长度)
let dataView = new DataView(buf, 0, 8);
console.log(dataView); // byteLength、byteOffset、buffer三个属性

//  DateView应该使用TypedArray来实现Javascript的Number类型到二进制格式的转换
//  TypedArray      字节         说明
//     Int8           1        8位有符号整数
//     Uint8          1        8位无符号整数
//     int16          2        16位有符号整数
//     Uint16         2        16位无符号整数
//     int32          4        32位有符号整数
//     Uint32         4        32位无符号整数
//     Float32        4        32位IEEE-54浮点数
//     Float64        8        64位IEEE-54浮点数

// 读写，前提是必须有充足的缓冲区，否则会抛出RangeError的错误
// 虽然长度不能超 但是值可以 不过当设置的值超过可存储的范围时 会设置为可存储的最大值
// 如 int8就是-128~127 小于-128时 存储-128 大于127则存储127
dataView.setInt8(0, 9999);
console.log('dateView.getInt8(0):', dataView.getInt8(0));

// 定型数组 TypedArray
// TypedArray数组的所有成员都是同一类型
// TypedArray数组的成员是连续的 不含空位
// TypedArray数组成员默认值为0
// TypedArray数组只是一层视图 本身不存储数据 数据都存储在ArrayBuffer中 要获取底层对象 必须使用buffer属性
let int8 = new Int8Array(buf);
// 可以通过new创建 可以接收ArrayBuffer和可迭代的numbers 如number数组 也可以直接传递一个number指定大小 默认以0填充
// console.log(new Int8Array(buf),);  // 每个元素2个字节
// console.log(new Int16Array(buf)); // 每个元素3个字节
// console.log(new Int32Array(buf)); // 每个元素4个字节

console.log(int8.BYTES_PER_ELEMENT); // 1 返回每个元素的大小
console.log(new Int16Array(buf).BYTES_PER_ELEMENT); // 2
console.log(new Int32Array(buf).BYTES_PER_ELEMENT); // 4

// 也可以通过TypedArray.of和Element.from创建 接收的参数不一样 接收number数组
// console.log(Int8Array.from([1,2,3]));
// console.log(Int8Array.of(...[1,2,3]));

// 定型数组和普通数组相似 但是因为数组缓冲无法改变大小 因此无法使用 concat、pop、push、shift、unshift、splice, 提供了set和subarray方法
// set(ArrayLike,offset)
int8.set([0, 1, 3], 0);
console.log(int8); // Int8Array [0,1,3,...]

let newInt8 = int8.subarray(0, 5);
console.log(newInt8); // Int8Array [ 0, 1, 3, 0, 0 ]
