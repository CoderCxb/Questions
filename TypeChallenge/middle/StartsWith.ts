// 判断是否以某个字符串类型开头

type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}` ? true : false;

type a = StartsWith<'abc', 'ac'> // expected to be false
type b = StartsWith<'abc', 'ab'> // expected to be true
type c = StartsWith<'abc', 'abcd'> // expected to be false

export {};