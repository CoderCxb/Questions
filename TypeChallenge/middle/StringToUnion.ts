// 字符串转换成联合类型

type Test = '123';

type StringToUnion<T extends string> = T  extends `${infer L}${infer R}` ? L | StringToUnion<R> : never;

type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"



export {}