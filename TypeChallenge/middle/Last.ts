type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

// 通过扩展运算符去做
type Last<T extends any[]> = T extends [...infer X, infer L] ? L : undefined;

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1