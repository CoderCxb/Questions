// Exclude<T,U> 从 T 中排出 U
type Info = 'name' | 'age' | 'title';

type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<Info, 'name'>