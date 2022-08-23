type foo = {
  name: string;
  age: string;
}
type coo = {
  age: number;
  sex: string
}

type Merge<T, U> = {
  [K in keyof T| keyof U]: 
    K extends keyof U ? U[K] : 
    K extends keyof T ? T[K] : never;
};

type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}


export {}