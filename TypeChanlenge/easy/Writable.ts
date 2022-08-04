type Writable<T extends Record<any,any>> = {
  -readonly [K in keyof T]: T[K]
}

type O = {
  readonly person:{
    name: string;
  }
}

let o: Writable<O> = {
  person: {
    name: 'cxb'
  }
}

o.person = {
  name: 'coder'
}