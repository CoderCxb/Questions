// 根据类型Pick属性,保留值类型为第二个泛型的键

type PickByType<R extends Record<any,any>, T extends any> = {
  [K in keyof R as R[K] extends T ? K : never]: R[K]
};

type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }