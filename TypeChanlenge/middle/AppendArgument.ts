type Fn = (a: number, b: string) => number


type AppendArgument<F extends (...args: any)=>any, A> = 
  F extends (...args: infer P) => infer R ? (...args: [...P,A]) => R : F;

type Result = AppendArgument<Fn, boolean> 
type Result2 = AppendArgument<Result, Object> 
// expected be (a: number, b: string, x: boolean) => number