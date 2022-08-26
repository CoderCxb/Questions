// 字符串首字母大写
type CapitalizeMap = {
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D',
  e: 'E',
  f: 'F',
  g: 'G',
  h: 'H',
  i: 'I',
  j: 'J',
  k: 'K',
  l: 'L',
  m: 'M',
  n: 'N',
  o: 'O',
  p: 'P',
  q: 'Q',
  r: 'R',
  s: 'S',
  t: 'T',
  u: 'U',
  v: 'V',
  w: 'W',
  x: 'X',
  y: 'Y',
  z: 'Z',
}

// 多个infer一起使用时,前面的infer都是一个,最后一个类似剩余参数
type MyCapitalize<S extends string> = 
  S extends `${infer F}${infer R}` 
    ? F extends keyof CapitalizeMap 
      ? `${CapitalizeMap[F]}${R}` 
      : S 
    : S;

type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'
