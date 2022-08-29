type Fibonacci<
  T extends number, 
  Count extends any[] = [1,1], 
  Pre extends any[] = [1],
  Next extends any[] = [1]> = 
    Count['length'] extends T
      ? Next['length']
      : Fibonacci<T, [...Count, 1], Next, [...Pre, ...Next]>;

type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
type Result3 = Fibonacci<10> // 55

export {};