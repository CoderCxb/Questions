// 接收一个数字类型,对数字进行减1的操作
// 思路: 利用数组长度

type MinusOne<T extends number, Arr extends any[] = []> = 
  Arr['length'] extends T 
    ? Arr extends [infer L, ...infer R]
      ? R['length']
      : never
    : MinusOne<T, [...Arr, 0]>;

type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54


export {};