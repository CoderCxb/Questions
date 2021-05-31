// 在node环境中 this默认指向exports 
console.log(this);

 exports.name='xxx'

 console.log(this);

//  浏览器的this指的是window
