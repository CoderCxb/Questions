// 有时，您可能希望根据某个属性在联合类型中查找类型。

// 在此挑战中，我们想通过在联合类型Cat | Dog中搜索公共type字段来获取相应的类型。换句话说，在以下示例中，我们期望LookUp<Dog | Cat, 'dog'>获得Dog，LookUp<Dog | Cat, 'cat'>获得Cat。

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type LookUp<U, T extends string> = {
  // 想要获取某个属性值为指定值的,可以让他extends { Key: Value }
  [K in T]: U extends { type: K } ? U : never 
}[T]

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
