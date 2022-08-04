
type Space = ' ' | '\t' | '\n'; 

// type Trim<T> = T extends `${Space}${infer R}` | `${infer R}${Space}` ? Trim<R> :T;

type Trim<T extends string> = T extends `${infer L}${Space}${infer R}` ? Trim<`${L}${R}`> : T;

type trimmed = Trim<'  Hello World  '>  // expected to be 'Hello World'

export {};