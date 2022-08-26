// In this challenge, you would need to write a type that takes an array and emitted the flatten array type.
// 在这个挑战, 你需要编写一个类型 - 接收一个泛型(数组类型)并且将数组类型进行扁平化(深层次,内部嵌套的数组也需要打平出来)

type Flatten<T extends any[]> = 
  T extends [infer L,...infer R] // L为第一项
    ? L extends any[]  // 判断是否为数组
      ? Flatten<[...L, ...R]> // 如果是数组则展开并且和R进行拼接之后再递归Flatten
      : [L, ...Flatten<R>]    // 如果不是,则返回数组形式,注意,R还是需要展开的
    : [];

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]