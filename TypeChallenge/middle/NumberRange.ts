// 数字范围

type NumberRange<T extends number, U extends number, Flag = false, Count extends any[] = [], Res extends any[] = []> = 
  Count['length'] extends T 
    ? NumberRange<T, U, true, [...Count, 1],[...Res, Count['length']]>
    : Count['length'] extends U
      ? Res[number] | U
      : Flag extends true
        ? NumberRange<T, U, Flag, [...Count, 1],[...Res, Count['length']]>
        : NumberRange<T, U, Flag, [...Count, 1],Res>;

type result = NumberRange<2,9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 

export {};