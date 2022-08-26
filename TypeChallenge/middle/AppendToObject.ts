// Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

// AppendToObject<T,K,V> 接收3个泛型, T是对象类型, K是key, V是value, 将key和value添加到对象中

type Test = { id: '1' }


type AppendToObject<T,K extends keyof any,V> = {
  [Key in keyof T | K]: Key extends keyof T ? T[Key] : V
} 

type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }