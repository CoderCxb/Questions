// 将负数转换成正数的字符串

type Test = -100;

// 注意: bigint在转换成string时,自动省略默认的n
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer N}` ? N : T;

type Res = Absolute<Test>

export {}