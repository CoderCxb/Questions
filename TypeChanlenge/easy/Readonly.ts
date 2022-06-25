



interface Todo {
  title: string
  description: string
}

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" 


// type Readonly<T> = { readonly [P in keyof T]: T[P]; }