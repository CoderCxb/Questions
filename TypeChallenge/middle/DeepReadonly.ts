// 定义类型DeepReadonly<T>接收一个泛型(引用数据类型), 将这个泛型变成完全可读, 即嵌套的对象也无法修改

// type DeepReadonly<T> = {
//   readonly [K in keyof T]: DeepReadonly<T[K]>;
// };

// antfu的解答
// 判断类型是不是引用数据类型可以使用 X extends Record<any,any>
type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends Record<any, any>
    ? T[k] extends Function
      ? T[k]
      : DeepReadonly<T[k]>
    : T[k]
}

type X = { 
  x: { 
    s: {
      c: Record<string,string>
    }
    n: number
  }
  y: boolean
}

type Todo = DeepReadonly<X> // should be same as `Expected`

let todo: Todo = {
  x: {
    s:{
      c: {
        name:'xxx'
      }
    },
    n: 100
  },
  y: false
}

// todo.y = true;
// todo.x.s = { c: 'c' };
// todo.x.n = 100;
// todo.x.s.c = {}
