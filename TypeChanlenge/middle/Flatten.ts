type Flatten<T extends any[]> = 
  T[] extends never[]
    ? []
    : T extends [infer L,...infer R] 
      ? L extends any[]
        ? Flatten<[...L, ...R]>
        : Flatten<[L, ...R]>
      : T;
    
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]