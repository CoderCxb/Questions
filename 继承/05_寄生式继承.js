// 寄生式继承
// 和原型式继承很接近 封装一个函数 在函数的内部创建一个增强对象(原型指向了传入的对象)并返回
function createObject(original){
  let clone = Object.create(original)
  return clone;
}

let obj=createObject({
  name:"marco"
})

console.log(obj.name);