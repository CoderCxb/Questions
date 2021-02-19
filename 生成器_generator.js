function* generatorFn(){
  // 使用throw抛出异常 如果在生成器中处理了异常 则仅仅是跳过本次yeild 如果没有处理 则直接结束
  // 注意：throw被catch捕获 并不会退出生成器函数 而是会继续往下找yeild 所以找到了11 所以 throw打印的是 value:11,done:false
  try{
    // 生成器在遇到yeild之前 就是个正常函数 
    // return会终止生成器
    for (let index = 0; index < 5; index++) {
      yield index;
      // if(index==2)return index;
    }
  }catch(e){
    console.log(e);
  }
  //  可以使用yeild* 可迭代对象
  yield* [11,22,33]
  // yeild需要直接属于generator函数 不能嵌套包裹
  // (function(){yield 1})()
}

let generator=generatorFn();
// generator类似迭代器 也有next、return、throw
// next方法的返回值也是{done:true,value:xxx}
// 注意：通过yeild退出的done为false  return退出的 done为true
// generator上有上有三个方法 next、return、throw
// 使用return 则后续的done都为true value都为undefined
// console.log(generator);
// for (let i of generator){
//   console.log(i);
// }

console.log(generator.next());
console.log(generator.throw('err'));
console.log(generator.next());

// 生成器作为默认的迭代器
let arr=[1,2,3]
arr[Symbol.iterator]=function*(){
  console.log(this.values());
  yield* this.values()
}
console.log(...arr);


