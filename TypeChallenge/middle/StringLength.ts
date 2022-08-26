// 获取字符串的长度

// string类型直接访问length无法得到长度,获得的会是number
// 通过将字符串转换成数组获取length
type StringLength<T extends string, U extends any[] = []> = 
  T extends `${infer L}${infer R}` ? StringLength<R,[L, ...U]> : U['length'];


type Len = StringLength<'abcde'>