type Flatten<T extends any[]> = 
  T extends [infer L,...infer R] // L为第一项
    ? L extends any[]  // 判断是否为数组
      ? Flatten<[...L, ...R]> // 如果是数组则展开并且和R进行拼接之后再递归Flatten
      : [L, ...Flatten<R>]    // 如果不是,则返回数组形式,注意,R还是需要展开的
    : [];

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]