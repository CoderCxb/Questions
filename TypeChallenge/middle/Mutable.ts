// 将所有属性变成非readonly

interface Todo {
  readonly title: string
  readonly description: string
  readonly completed: boolean
}

type Mutable<T extends Record<keyof any,any>> = {
  -readonly[K in keyof T]: T[K]
};

type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }

export {};