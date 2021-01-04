function Person(){
  // this.value='this设置的value';
  console.log(this);
}
Person.prototype.value='prototype设置的value';

let p1=new Person()
console.log(p1.value);

