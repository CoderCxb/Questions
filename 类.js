class Person{
    static type='人';
    name='marco';
    run(){
        console.log("跑步");
    }
    static sing(){
        console.log("唱歌");
    }
    constructor(){
        console.log(this);
    }
}

// 类的实例属性存在于new之后的对象上 因此除非新建 否则无法访问
new Person() // 等价于new Person.prototype.constructor()

// 类的实例方法存在于prototype上 不需要实例化就可以调用
Person.prototype.run()

// 类的静态属性和静态方法存在于类的构造函数上
console.log(Person.prototype.constructor.type);
Person.prototype.constructor.sing();
