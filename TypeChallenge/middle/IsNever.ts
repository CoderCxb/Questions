// Implement a type IsNever, which takes input type T. If the type of resolves to never, return true, otherwise false.
// 实现类型IsNever,接收泛型T, 如果T是never,则返回true,否则false

// PS: 泛型无法直接extends never, 返回值会一直是never, 需要进行协变,如 T[] extends never[] 或者 [T] extends [never]

type IsNever<T> = T[] extends never[] ? true : false;
type Res = IsNever<never>;