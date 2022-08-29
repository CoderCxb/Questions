// Implement the type of just-flip-object. Examples:
// 翻转对象键和值

type Flip<T extends Record<any,any>> = {
  [K in keyof T as `${T[K]}`] : K;
};

type T1 = Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type T2 = Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type T3 = Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}