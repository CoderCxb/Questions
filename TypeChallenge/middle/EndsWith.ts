// 判断是否以某个字符串结尾

type EndsWith<T extends string, U extends string> = T extends `${infer R}${U}` ? true : false;

type a = EndsWith<'abc', 'bc'> // expected to be true
type b = EndsWith<'abc', 'abc'> // expected to be true
type c = EndsWith<'abc', 'd'> // expected to be false


export {};