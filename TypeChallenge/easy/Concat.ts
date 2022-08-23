type Concat<T extends any[],F extends any[]> = [...T, ...F]; // 可以使用扩展运算符

type Result = Concat<[1], [2]> // expected to be [1, 2]