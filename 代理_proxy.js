// 代理 在对象上添加代理 可以拦截并进行操作
// 注意点：
// 1.修改原始对象时 也会修改proxy的值 因为proxy获取的是引用 但是 修改原始对象的属性并不会触发proxy的拦截行为
// 2.proxy拦截函数中的this指向的是proxy本身
let obj={
  name:'marco'
}
// 1. proxy接收一个两个对象
// 第一个对象是需要代理的对象 target    第二个是代理配置对象 handler
// 2. 共有13中拦截行为 并且这13中拦截都可以使用Reflect 来保持原本的操作
// 3. 除了使用 new Proxy() 也可以使用 Proxy.revocable()
let {proxy,revoke}=Proxy.revocable(obj,{
  // 获取时触发 
  // target原始对象 property属性名 receiver代理对象
  // 拦截proxy.xx proxy[xx] Reflect.get等等获取操作
  get(target,property,receiver){
    console.log('拦截属性获取:get');
    // return target[property]
    return Reflect.get(target,property,receiver)
  },
  // 拦截赋值行为
  set(target,property,value,receiver){
    Reflect.set(target,property,value,receiver)
    console.log('拦截属性赋值:set');
    // return true 表示成功  return false表示失败 严格模式下报错TypeError
    return true;
  },
  // 拦截定义属性行为 注意：赋值也会触发
  defineProperty(target,property,descriptor){
    Reflect.defineProperty(target,property,descriptor)
    console.log('拦截属性定义:defineProperty');
    return true
  },
  // 阻止扩展 即extension:false 不允许添加新的属性 否则报错
  preventExtensions(target){
    Reflect.preventExtensions(target); // 阻止扩展
    console.log('拦截阻止扩展:preventExtensions');
    return true;
  },
  // 拦截设置原型的操作
  setPrototypeOf(target,proto){
    Reflect.setPrototypeOf(target,proto)
    console.log('拦截设置原型操作:setPrototypeOf');
    return true;
  },
  // 设置原型
  getPrototypeOf(target){
    console.log('拦截获取原型操作:getPrototypeOf');
    return Reflect.getPrototypeOf(target)
  },
  // 拦截删除属性操作
  deleteProperty(target,property){
    console.log('拦截删除属性操作:deleteProperty');
    Reflect.deleteProperty(target,property)
    return true;
  },
  // 判断是否包含指定属性 in操作符和has时都会触发
  has(target,property){
    console.log('拦截是否包含属性操作:has');
    return Reflect.has(target,property);
  },
  // 拦截获取属性描述操作
  getOwnPropertyDescriptor(target,property){
    console.log('拦截获取属性描述操作:getOwnPropertyDescriptor');
    return Reflect.getOwnPropertyDescriptor(target,property)
  },
  // 拦截判断proxy是否可扩展操作
  isExtensible(target){ 
    console.log('拦截判断proxy是否可扩展操作:isExtensible');
    return Reflect.isExtensible(target)
  },
  // 拦截获取proxy的keys的操作
  ownKeys(target){
     console.log('拦截获取proxy的keys操作:ownKeys');
     return Reflect.ownKeys(target)
  },
})

// 取消代理 取消之后就无法使用proxy了
// revoke();

// 触发get 
// console.log(proxy.name);

// 触发set和defineProperty
// proxy.name='polo';

// Reflect.defineProperty(proxy,'age',{
//   value:12
// })

// 阻止扩展新的属性
// Object.preventExtensions(proxy)

// 设置原型 
// Reflect.setPrototypeOf(proxy,{title:'设置原型'})
// console.log(proxy.__proto__);

// 获取原型
// console.log(Reflect.getPrototypeOf(proxy));

// 删除属性
// delete proxy.name

// 是否包含某个属性
// console.log(Reflect.has(proxy,'name'));

// 获取指定属性的描述 
// console.log(Reflect.getOwnPropertyDescriptor(proxy,'name'));

// 判断是否proxy是否可扩展
// console.log(Reflect.isExtensible(proxy));

// 获取proxy上的属性 不包含原型上的
// console.log(Reflect.ownKeys(proxy));

// 
function fn(){
  console.log(arguments);
}
let fnProxy=new Proxy(fn,{
  // target目标对象 this指向:any 剩余参数:Array
  apply(target,thisArg,args){
    Reflect.apply(target,thisArg,args)
    console.log('拦截函数apply和call操作:apply');
  },
  // target目标对象 参数数组args newTarget 生成的proxy
  construct(target,args,newTarget){
    console.log('拦截函数new操作:construct');
    // console.log(fn===target,fnProxy===newTarget); // true true
    return Reflect.construct(target,args,newTarget) 
  },
})
// 拦截apply或者call
// fnProxy.apply({},[1,2,3,4])
// 拦截new操作
// new fnProxy()