// 从字符串中删除所有指定字符
type DropChar<T extends string, U extends string> = 
  T extends `${infer L}${U}${infer R}`
    ? DropChar<`${L}${R}`, U>
    : T;

type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'