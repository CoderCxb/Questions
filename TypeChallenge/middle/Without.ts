// 数组去除指定元素

type ToUnion<T extends number | any[]> = T extends number[] ? T[number] : T;

type Without<T extends any[], U extends number | any[], Res extends any[] = []> = 
  T extends [infer L, ...infer R]
    ? L extends ToUnion<U> 
      ? Without<R, U, [...Res]>
      : Without<R, U, [...Res,L]>
    : Res;

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

export {};