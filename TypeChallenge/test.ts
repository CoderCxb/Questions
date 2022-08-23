// 空对象的表示
// Record<keyof any, never>, 只要有key就不是空对象, 无论value
type IsEmptyObjectByN<T> = 
  T extends Record<keyof any, never> ? true : false;
type R = IsEmptyObjectByN<{}>; // true
type R2 = IsEmptyObjectByN <{ name: undefined }>; // false


// Record<keyof any, undefined> 对象的值为undef或者没有定义(等同与undefined)时为空对象
type IsEmptyObjectByU<T> = T extends Record<keyof any, undefined> ? true : false;

type R3 = IsEmptyObjectByU<{}>; // true
type R4 = IsEmptyObjectByU <{ name: null }>; // true

export {};