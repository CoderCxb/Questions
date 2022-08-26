declare const config: Chainable



type Chainable<Options = {}> = {
  // 使用了泛型函数
  option<K extends string, V>(key: K, value: V): Chainable<Options & { [S in K]: V }>
  get(): Options
}

const Res = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()


// 期望 result 的类型是：
// interface Result {
//   foo: number
//   name: string
//   bar: {
//     value: string
//   }
// }