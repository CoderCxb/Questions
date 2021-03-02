function Person(){
  console.log(new.target===Person);
}

let p=new Person();