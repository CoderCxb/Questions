// 类似string的join方法

type Join<T extends unknown[], S extends string | number, Res extends string = ''> = 
  T extends [infer L, ...infer R]
    ? Join<R, S ,`${Res}${L & string}${R['length'] extends 0 ? '' : S}`>
    : Res;

type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'


export {};