// 同数组的lastIndexOf方法

type LastIndexOf<Arr extends any[], V, Count extends any[]= []> = 
  Arr extends [...infer L,infer R]
    ? R extends V 
      ? L['length']
      : LastIndexOf<L, V, [...Count, 1]>
    : -1;


type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type Res2 = LastIndexOf<[0, 0, 0], 2> // -1