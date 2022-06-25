type Push<T extends any[],V> = [...T, V]

type Result = Push<[1, 2], '3'> // [1, 2, '3']