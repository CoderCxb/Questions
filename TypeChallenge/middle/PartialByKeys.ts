type PartialByKeys<T extends Record<any,any> , Keys extends string> = {}

// TODO

interface User {
  name: string
  age: number
  address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }