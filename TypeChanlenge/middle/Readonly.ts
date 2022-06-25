interface Todo {
  title: string
  description: string
  completed: boolean
}


type MyReadonly2<T,P extends keyof T> = {
  readonly [K in P]: T[K];
} & {
  [K in Exclude<keyof T,P>]:T[K];
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK