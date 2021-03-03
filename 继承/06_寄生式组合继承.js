// 寄生式组合继承 
// 继承的最佳实践 class实现的原理
function SuperType(){
  this.sup='父'
}

function SubType(){
  this.sub='子'
}

function inheritPrototype(subType,superType){
  // Javascript高级程序第四版写法
  // 原型:SubType { constructor: [Function: SubType] }
  let proto = Object.create(superType.prototype,{
    constructor:{
      value:SubType,writable: true,configurable: true
    }
  })
  console.log(typeof subType.prototype);
  console.log( typeof proto);
  subType.prototype=proto;

  // 基本等效
  // 原型:SubType {}
  // Object.setPrototypeOf(subType.prototype,superType.prototype)
  // subType.prototype.constructor=SubType;
}

inheritPrototype(SubType,SuperType)
let s=new SubType();
console.log(s instanceof SuperType);
console.log(s instanceof SubType);
console.log(s.__proto__ === SubType.prototype);
