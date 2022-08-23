// FooBarBaz -> foo-bar-baz

type KebabCase<T> =
 // 获取第一个字符和剩余字符
  T extends `${infer F}${infer R}`
    // 判断剩余字符转换成小写和不转换的区别
    ? R extends Uncapitalize<R> 
      ? `${Lowercase<F>}${KebabCase<R>}` 
      // extends为false, 说明接下去是新的单词,需要用-连接
      : `${Lowercase<F>}-${KebabCase<R>}`
    : T;

type Result = KebabCase<'FooBarBaz'>;



export {};