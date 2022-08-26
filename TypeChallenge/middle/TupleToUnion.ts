// Tuple转换成联合类型

type Arr = ['1', '2', '3']


type TupleToUnion<T extends any[]> = T[number]

// antfu解答
// export type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

export {};