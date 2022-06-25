type MyParameters<T extends (...args: any)=>any> = 
  T extends (...args: infer P) => any ? P : never;

type fn = (name:string, age:number) => void;

type FnParameters = Parameters<fn>