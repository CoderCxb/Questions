// Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.
// 实现类型 IsUnion, 接收泛型T, 如果是联合类型则返回true,否则false

// 思路就是 泛型 T extends U(T), 因为T进行extends时会拆分,所以需要U来存放原始的T
// 如果 T extends U (这里的T会被拆分成子项) 和 [U] extends [T] 成立, 说明不是联合类型

type IsUnion<T,U = T> = 
  T extends U // 如果是联合类型, 则后续的T就是子项
  ? [U] extends [T] // 判断U和子项的关系
    ? false
    : true
  : never;

type case1 = IsUnion<never>  // false
type case2 = IsUnion<string|number>  // true
type case3 = IsUnion<[string|number]>  // false

export {};