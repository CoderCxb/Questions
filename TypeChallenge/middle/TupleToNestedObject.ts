// 将Tuple转换成嵌套的对象

type TupleToNestedObject<Arr, T> = 
  Arr extends [infer L extends string, ...infer R]
    ? {[K in L]: TupleToNestedObject<R, T>}
    : T

type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type

export {};