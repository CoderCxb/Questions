// 
let obj={
    name:'marco',
    age:20,
    // toJSON(){
    //     return '对象本身的toJSON方法'
    // }
}
let obj2={
    name:'marco',
    age:20,
    toJSON(){
        return '对象本身的toJSON方法'
    }
}
// 1.可以通过replacer指定哪些属性需要序列化
console.log(JSON.stringify(obj,['name','age']));
// 2.如果待序列化的对象有toJSON方法 则使用该方法的返回值
console.log(JSON.stringify(obj2));
// 3.当JSON.stringify接收原始值时  基本等效于toString
console.log(typeof JSON.stringify(1));