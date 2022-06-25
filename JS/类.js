class Animal{}
// 注意:
// 类的作用域限制是块级 也就是说 {}中定义的类 外部就无法访问了
// 使用typeof检测 类型为function
class Person extends Animal{
    static type='人';
    name='marco';
    get title(){
        return this.name
    }
    run(){
        console.log("跑步");
    }
    static sing(){
        // 静态方法中的this指向类自身
        console.log(this,"唱歌");
    }
    constructor(){
        // 1.super等价于父类 无法单独引用 要么使用静态方法或属性 要么super()
        // 2.super必须写在构造函数的第一行
        // 3.派生类必须有super()或者返回对象
        super()
    }
    // toString(){
    //     return this;
    // }
}

// 类的实例属性存在于new之后的对象上 因此除非新建 否则无法访问
let p=new Person() // 等价于new Person.prototype.constructor()
console.log(p);
console.log(Person.prototype);

// 类的实例方法存在于prototype上 不需要实例化就可以调用
// 方法之所以放在原型上 是因为方法一般是共享的 如果放在this上 则每次创建对象的时候 都会创建这个方法 而放在原型上 则创建对象的时候不会创建这个方法 使用的时候去原型上拿就好了
Person.prototype.run()

// 类的静态属性和静态方法存在于类的构造函数上
console.log(Person.type);
Person.sing();


// 例子:
// run(){} 这种方式是将方法定义在原型上
// sing=function(){} 是将方法定义在实例上 将方法看成属性
// 定义上实例上会导致每个实例的方法都不是同一个 即每次创建实例的时候方法都是重新创建的 而方法一般都是共用的 因此定义在原型上更加合适
class Test{
    run(){}
    sing=function(){}
}
let t1=new Test()
let t2=new Test();
console.log(t1.run===t2.run);
console.log(t1.sing===t2.sing);