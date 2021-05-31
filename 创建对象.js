// 1.工厂模式创建对象
function createObject(name,age){
  let obj={};
  obj.name=name;
  obj.age=age;
  obj.run=function(){
    console.log('跑步');
  }
  return obj;
}

let obj1=createObject();
console.log(obj1);

// 2. 构造函数模式
function constructorFn(name,age){
  if(new.target!==constructorFn) throw(`用new关键字难道不香吗?`)
  this.name=name;
  this.age=age;
}

let obj2=new constructorFn('marco',18)
console.log(obj2);


// 3. 原型模式

