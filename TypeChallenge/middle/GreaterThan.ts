
type GreaterThan<A extends number, B extends number, Arr extends any[]= []> = 
  Arr['length'] extends B 
    ? Arr['length'] extends A ? false : true
    : Arr['length'] extends A 
      ? false
      : GreaterThan<A,B, [...Arr, 1]>;

type R1 = GreaterThan<2, 1> //should be true
type R2 = GreaterThan<1, 1> //should be false
type R3 = GreaterThan<10, 100> //should be false
type R4 = GreaterThan<111, 11> //should be true

export {};