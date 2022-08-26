// Implement PercentageParser. According to the /^(\+|\-)?(\d*)?(\%)?$/ regularity to match T and get three matches.

// The structure should be: [plus or minus, number, unit] If it is not captured, the default is an empty string.

type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'


type Nums = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0' ;
type Operators = '+' | '-' | '' | '%';

// type PercentageParser<T extends string, S extends string = '',Res extends any[] = []> = 
//   T extends `${infer F}${infer R}`
//     ? F extends Operators 
//       ? PercentageParser<R, '', [F]> 
//       : F extends '%'
//         ? PercentageParser<R, ``, [...Res,S, F]> 
//         : PercentageParser<R, `${S}${F}`, Res> 
//     : Res['length'] extends 3
//       ? Res
//       : PercentageParser<T, S, [...Res, '']>;

type PercentageParser<T extends string, S extends string = '',Res extends any[] = []> = 
  T extends `${infer L}${infer R}`
    ? L extends Nums
      ? Res['length'] extends 0
        ? PercentageParser<R, `${S}${L}`, [...Res, '']>
        : PercentageParser<R, `${S}${L}`, Res>
      : L extends '%' | ''
        ? PercentageParser<R, L, [...Res, S]>
        : PercentageParser<R, '', [...Res, L]>
    : Res['length'] extends 3 ? Res : PercentageParser<T, '', [...Res, S]>;

type R1 = PercentageParser<PString1> // expected ['', '', '']
type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
type R5 = PercentageParser<PString5> // expected ["", "85", ""]