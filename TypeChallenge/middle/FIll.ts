// 数组填充

type Fill<Arr extends any[], T, Res extends any[]= []> = 
  Arr extends [infer L, ...infer R] 
    ? Fill<R,T, [...Res, T]> 
    : Res;

type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]