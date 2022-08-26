// For given function type Fn, and any type A (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take Fn as the first argument, A as the second, and will produce function type G which will be the same as Fn but with appended argument A as a last one.

// AppendArgument接收两个泛型, 第一个泛型为函数类型,第二个泛型为任意类型(any), 将第二个泛型添加到函数类型的参数列表中
// 注意: 参数名不重要, 重要的是参数顺序
// AppendArgument<(a: number, b: string) => number, boolean>  得到 (a: number, b: string, c: boolean) => number

type Fn = (a: number, b: string) => number

type AppendArgument<F extends (...args: any)=>any, A> = 
  F extends (...args: infer P) => infer R ? (...args: [...P,A]) => R : F;

type Result = AppendArgument<Fn, boolean> 
type Result2 = AppendArgument<Result, Object> 
// expected be (a: number, b: string, x: boolean) => number