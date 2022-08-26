###### 数组类型扩展
```ts
// T extends any[]表示是数组类型, 在TS中数组也可以使用扩展运算符
type Unfold<T extends any[]> = [...T];
```

###### 根据属性获取类型
```ts
// 根据属性获取值作为类型
type Book = {
  title: 'Professional JavaScript for Web Developers',
  color: 'Red',
}

type Title = Book['title']; // 字面量类型: Professional JavaScript for Web Developers

type BooksValues = Book[keyof Book]; // 获取所有值的联合类型


// 同理, 数组也是对象的一种
type Arr = [1024, 'A', true];

type Len = Arr['length']; // 3

type FirstItem = Arr['0']; // 1024

// 获取数组所有值的联合类型
type Values = Arr[number]; // type Values = true | 1024 | "A"
```

###### 判断是否是引用数据类型
```ts
type IsReferenceType<T extends any> = T extends Record<any, any> ? true : false;

type Res = IsReferenceType<{}>; // true
type Res2 = IsReferenceType<1>; // false
```


###### 判断空数组
```ts
// 方法一: 判断extends []是否为true
type IsEmptyArray<T extends any[]> = T extends [] ? true : false;

// 方法二: 判断数组的length是否为0
type IsEmptyArray<T extends any[]> = T['length'] extends 0 ? true : false;

type R = IsEmptyArray<[]>;
```


###### 判断空对象
```ts
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
```


###### 区别string类型和字符串字面量类型
```ts
// 可以通过`${infer S}`判断类型是不是字符串字面量类型
type ZML = 'Hello' extends `${infer S}` ? true : false; // true

type S = string extends `${infer S}` ? true : false; // false
```


###### as在映射类型中的使用
```ts
// 断言在映射类型中的应用
// Omit的另一种写法(不同于内置写法)
type MyOmit<T extends Record<any,any>, U extends keyof any> = {
  // 将K进行断言, 如果K extends U,则返回never,而never类型的key会被忽略,也就达到了Omit的要求
  [K in keyof T as K extends U ? never : K]: T[K]
}

// 根据类型来保留键值
type PickByType<R extends Record<any,any>, T extends any> = {
  // 将K进行断言,如果 R[K] extends T, 则说明类型符合,返回K,如果不符合,返回never进行忽略
  [K in keyof R as R[K] extends T ? K : never]: R[K]
};
```