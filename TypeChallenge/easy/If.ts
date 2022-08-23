// C是否为true, 是的话返回T,否则F
type If<C,T,F> = C extends true ? T : F

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'