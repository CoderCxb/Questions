type Info = 'name' | 'age' | 'title';


type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<Info, 'name'>