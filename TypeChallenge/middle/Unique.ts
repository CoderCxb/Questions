// 去重

type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

type Has<U extends any[], T> = 
  U extends [infer L, ...infer R]
    ? Equals<L, T> extends true 
      ? true
      : Has<R, T>
    : false;

type Unique<T extends any[], Res extends any[]= []> = 
  T extends [infer L, ...infer R]
    ? Has<Res, L> extends true 
      ? Unique<R, Res> 
      : Unique<R, [...Res, L]> 
    : Res;



type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2 = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
type Res3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]

export {}