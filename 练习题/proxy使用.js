// 2.已知如下对象，请基于es6的proxy方法设计一个属性拦截读取操作的例子，要求实现去访问目标对象example中不存在的属性时，抛出错误：Property “$(property)” does not exist

let obj={
  name:'marco',
  age:18
}

let pObj=new Proxy(obj,{
  get(target,key,receiver){
    if(key in target){
      return target[key]
    }else{
      throw Error(`Property ${String(key)} does not exist`)
    }
  }
});

console.log(pObj.age);
console.log(pObj.xxxx);