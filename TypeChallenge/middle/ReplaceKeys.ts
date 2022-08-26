// Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing, A type takes three arguments.

// ReplaceKeys<T, Keys, O>, T是对象的联合类型，Keys是要替换的键的联合类型，O是用来替换的对象
// 将T中的对象的Keys对应的值 用O中对应的值替换

type NodeA = {
  type: "A";
  name: string;
  flag: number;
};

type NodeB = {
  type: "B";
  id: number;
  flag: number;
};

type NodeC = {
  type: "C";
  name: string;
  flag: number;
};

type ReplaceKeys<
  T extends Record<any, any>,
  Keys extends keyof any,
  O extends any
> = {
  [K in keyof T]: K extends Keys ? (K extends keyof O ? O[K] : never) : T[K];
};

type Nodes = NodeA | NodeB | NodeC;

type ReplacedNodes = ReplaceKeys<
  Nodes,
  "name" | "flag",
  { name: number; flag: string }
>; // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }>; // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
