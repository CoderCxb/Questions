type MyParameters<T> = T extends (...args: infer R)=> any ? R : never

type fn = (name:string, age:number) => void;

type FnParameters = Parameters<fn>
