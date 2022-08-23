type Test = { id: '1' }


type AppendToObject<T,K extends keyof any,V> = {
  [Key in keyof T | K]: Key extends keyof T ? T[Key] : V
} 

type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }