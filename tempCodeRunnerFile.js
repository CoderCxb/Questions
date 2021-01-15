class Person{
    name='xxx';
    run(){}
    constructor(){
        this.name='xxx'
    }
}
class Student extends Person{}

console.log(Person.prototype);
console.log(Student.prototype);
