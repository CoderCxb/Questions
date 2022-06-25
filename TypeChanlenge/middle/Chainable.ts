declare const config: Chainable

type Chainable<T = {}> = {
  // 使用了泛型函数
  option: <K extends string, V>(key: K, value: V) => Chainable< T &{ [S in K]: V }>,
  get: () => T
}

// type Chainable<Options = {}> = {
//   option<K extends string, V>(key: K, value: V): Chainable<Options & { [S in K]: V }>
//   get(): Options
// }

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 期望 result 的类型是：
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}