type IsEmpty<T extends any[] | {}> = 
  T extends any[] 
    ? T['length'] extends 0 
      ? true : false
  : T extends {} 
    ? (keyof T)[] extends never[]
      ? true : false
  : false; 


type EmptyArr = IsEmpty<[]>;
type NornalArr = IsEmpty<[1,2,3]>


type EmptyObj = IsEmpty<{}>;
type NornalObj = IsEmpty<{ title: '' }>;


export {};