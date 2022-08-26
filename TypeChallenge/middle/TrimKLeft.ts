// 去除字符串类型的左边空格

type Space = ' ' | '\t' | '\n'; 

// 利用 ``、extends以及infer 获取字符串除空格以外的右边部分
type TrimLeft<T extends string> = T extends `${Space}${infer R}` ? TrimLeft<R> :T;

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
