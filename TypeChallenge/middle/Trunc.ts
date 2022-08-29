// 截断小数部分

type Trunc<T extends number | string> = `${T}` extends `${infer L}.${infer R}` ? L : T;
type A = Trunc<12.34> // 12
type B = Trunc<-12.34> // 12

export {};