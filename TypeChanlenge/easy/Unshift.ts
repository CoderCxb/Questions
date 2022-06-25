type Unshift<T extends any[], V> = [V, ...T]

type Result = Unshift<[1, 2], 0> // [0, 1, 2]