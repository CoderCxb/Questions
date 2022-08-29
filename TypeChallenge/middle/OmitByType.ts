type OmitByType<R extends Record<keyof any,any>, T extends any> = {
  [K in keyof R as R[K] extends T ? never: K]: R[K]
}

type OmitBoolean = OmitByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { name: string; count: number }

export {};