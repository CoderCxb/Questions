// 给定类型Type

type ToTypeMap<T extends Record<any,any>> = {
  [K in T as K['type']]: K;
}

type Type = {type: 'a'; A: number} | {type: 'b'; B: string} | {type: 'c'; C: boolean};
type TypeMap = ToTypeMap<Type>; // or ToTypeMap<Type, 'type'>

// 满足下面结果
type A = TypeMap['a']['A']; // number
type B = TypeMap['b']['B']; // string
type C = TypeMap['c']['C']; // boolean

export {};