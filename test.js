const { format } = require("path");

class Person{
    name='xx';
    age=10;
    test(){}
}
let p =new Person();
p.__proto__.source=100;
console.log(p.__proto__.test);
for(var key in p){
    console.log(key);
}


console.log();
