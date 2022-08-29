// 类似数组方法中的 push、pop、shift、unshift
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type Pop<T extends any[]> = T extends [... infer L, infer R] ? L : [];
type Shift<T extends any[]> = T extends [infer L, ... infer R] ? R : [];
type Unshift<T extends any[], V> = [V, ...T];
type Push<T extends any[],V> = [...T, V];

type res1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type res3 = Shift<res1> // expected to be ['b', 'c']
type res4 = Unshift<res3, 'd'> // expected to be ['d', 'b', 'c']
type res5 = Push<res4, 'e'> // expected to be ['d', 'b', 'c', 'e']


export {};