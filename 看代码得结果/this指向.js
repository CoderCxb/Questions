var a = 10;
(function (){
  // 由于函数内部定义了, 此处的a是函数内部的a, 未赋值,为undefined
  console.log(a);  // undefined
  a = 5; // 这里也是给函数内部的a赋值
  // window上的a是10
  console.log(window.a); 10 
  // 函数内部的a
  var a = 20; 
  console.log(a); // 20
})()