// 假值
type Falsy = '' | false | null | undefined | 0 | [] | Record<any, never>;

// 判断对象或者数组是否为空
// T extends [] ? true : false 可以判断是否是空数组
type IsEmpty<T extends Record<any,any> | any[]> = 
  T extends any[]
    ? T extends [] ? true : false
  : T extends {} 
    ? (keyof T)[] extends never[]
      ? true : false
  : false; 

// 自己写的初版
type AnyOf2<T extends any[]> = 
  T extends [infer L, ...infer R]
   ? L extends Record<any,any> | any[] // 对象/数组先判断
    ? IsEmpty<L> extends true 
      ? AnyOf<R> 
      : true | L
    : L extends Falsy // 是否是假值
      ? AnyOf<R>
      : true
    :false;

// 精简版
// 主要是Record<keyof any,never>和[]简化了过程
type AnyOf<T extends any[]> = 
  T extends [infer L, ...infer R]
    ? L extends Falsy
      ? AnyOf<R>
      : true
    :false;


type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.


export {}