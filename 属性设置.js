// 1. 原型链上存在的属性,在进行赋值,会发生属性屏蔽,因此会添加属性
let obj = {};
obj.__proto__.name = '杭州';
obj.name = '上海';
console.log(obj);


// 2. 原型链上的属性是 writable:false时, 继承该原型链的对象的该属性也无法修改
let father = {};
Object.defineProperty(father, 'age', {
  value: 24,
  writable: false
})

let son = {};
Object.setPrototypeOf(son, father);

son.age = 18; // 赋值失败
console.log(son.age); // 24

// 3. 原型链上的属性是setter, 设置同名属性一定会调用该setter,并且设置无效

let superType = {
  get name() {
    return 'xxx'
  },
  set name(_name) {
    console.log('原型链上的set触发');
  }
};
let subType = {};
Object.setPrototypeOf(subType, superType);
subType.name = 'yyy'; // 设置无效，并触发setter
console.log(subType.name);



