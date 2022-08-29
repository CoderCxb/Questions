// 将对象转换成entries

type ObjectEntries<
  T extends Record<keyof any,any>, 
  Keys extends keyof any = keyof T > = Keys extends keyof any ? [Keys,T[Keys]] : never;

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];

