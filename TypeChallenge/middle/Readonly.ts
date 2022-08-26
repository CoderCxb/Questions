// 将指定的属性变成只读
// MyReadonly<Todo, 'title' | 'description'> 将Todo中的title和description属性变成只读


interface Todo {
  title: string
  description: string
  completed: boolean
}


type MyReadonly<T,P extends keyof T> = {
  readonly [K in P]: T[K];
} & {
  [K in Exclude<keyof T,P>]:T[K];
}

const todo: MyReadonly<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK


export {};