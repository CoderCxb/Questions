interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T,P> = {
  [K in Exclude<keyof T,P>]: T[K]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}