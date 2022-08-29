// 数组反向

type Reverse<T extends any[], Res extends any[]= []> = 
  T extends [infer L, ...infer R] 
    ? [...Reverse<R>, L, ...Res, ]
    : Res;
type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

export {};