function Person(){
  console.log(this);
}


let fn = Person.bind({name:'cxb'});

fn();
new fn();