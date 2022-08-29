// 翻转函数参数列表类型

// type Reverse<T extends any[], Res extends any[]= []> = 
//   T extends [infer L, ...infer R] 
//     ? [...Reverse<R>, L, ...Res, ]
//     : Res;
    
// type FlipArguments<T extends (...args: any)=> any> = (...args: Reverse<Parameters<T>>) => ReturnType<T>;


// type FlipArguments<T extends (...args: any)=> any, Params extends any[] = []> = 
//   Parameters<T> extends [...infer F, ...infer R]
//     ? FlipArguments<T, [F, ...R]>
//     : (...args: Params) => ReturnType<T>;

type FlipArguments<T extends (...args: any)=> any, Params extends any[] = []> = 
  T extends (...args: infer P) => infer R
    ? P extends [infer F, ...infer Rest]
      ? FlipArguments<(...args: Rest) => R, [F, ...Params]>
      : (...args: Params) => R
    : never;


type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void

export {};