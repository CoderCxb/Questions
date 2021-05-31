// new绑定>显式绑定(bind)>隐式绑定>默认绑定
function Person(){
  console.log(this);
}

let obj={name:'xxx'};
let Person2=Person.bind(obj)

console.log(new Person2());