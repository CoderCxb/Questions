type RequiredByKeys<T, Keys extends keyof T> = {}

// TODO

interface User {
  name?: string
  age?: number
  address?: string
}

type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }

export {};