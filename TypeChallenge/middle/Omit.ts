// Omit

interface Todo {
  title: string
  description: string
  completed: boolean
}

// 写法一
// type MyOmit<T,P extends keyof any> = {
//   [K in Exclude<keyof T,P>]: T[K]
// }


// 写法二
type MyOmit<T, P extends keyof any> = {
  [K in keyof T as K extends P ? never : K] : T[K]
}



interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>


const todo: TodoPreview = {
  completed: false,
}

export {};