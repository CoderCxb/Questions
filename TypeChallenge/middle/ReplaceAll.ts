// 将字符串中的某个字符全部替换成另一个字符串
// 示例
// Replace<'types are fun fun fun!', 'fun', 'awesome'>  得到 types are awesome awesome awesome!

type Replace<S, From extends string, To extends string> =  
  // 被替换的元素不能是''
  From extends '' 
    ? S 
    // Form是要被替换的元素,L和R分别是其左右的字符串
    : S extends `${infer L}${From}${infer R}` 
      // `${L}${To}${R}`已经是替换后的字符串了,继续使用Replace替换直到无法From无法匹配
      // ${L}不需要继续比较,直接拼接
      ? Replace<`${L}${To}${R}`, From, To> // 递归替换
      : S;


// 无论出现几次都会被替换
type replaced = Replace<'types are fun fun fun!', 'fun', 'awesome'> // expected to be 'types are awesome awesome awesome!'

