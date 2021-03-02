// 组合继承
// 综合了原型链继承和构造函数继承的方法,将两者的优点结合到一起
function SuperType(){
  this.sup='父'
}
SuperType.prototype={
  type:"SuperType"
}

function SubType(){
  this.sub='子'
  SuperType.call(this)
}

// 如果是将new SuperType()设置在SubType的原型上的话
// 那么实例的类型就是SubType 也就是打印出来的类型是 SuperType{} 
// 因此 可以将 new SuperType()设置到SubType.prototype上 这样只是将原型的原型接到SuperType上 并不改变SubType本身的原型 

// 此处使用setPrototypeOf 这样会赋值到__proto__上 而__proto__对函数并没有什么用

// SubType.prototype=new SuperType()
// Object.setPrototypeOf(SubType,new SuperType())
Object.setPrototypeOf(SubType.prototype,SuperType.prototype)
// SubType.prototype=new SuperType()

let s=new SubType()
console.log(s instanceof SuperType);
console.log(s.__proto__);
console.log(s.sup);
console.log(s.sub);

console.log(s.type);