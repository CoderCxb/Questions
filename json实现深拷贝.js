let obj={
    name:'cxb',
    age:24
}

let obj2=JSON.parse(JSON.stringify(obj));
obj2.name='xxx'
console.log(obj);