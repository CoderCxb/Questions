'use strict';
let rss=process.memoryUsage().rss
// function test(n){
//   if(n<=0)return n;  
//   console.log(process.memoryUsage().rss);
//   console.log(n);
//   return test(n-1)
// }

// console.log(test(50000));

// function fib(n){
//   if(n<2)return n;
//   else{
//     console.log(process.memoryUsage().rss);
//     return fib(n-1)+fib(n-2)
//   }
// }

// console.log(fib(1000));

function fibImpl(a,b,n){
  // let buffer=Array(10000);
  if(n===0)return a;
  console.log(process.memoryUsage().rss);
  return fibImpl(b,a+b,n-1) 
}
function fib2(n){
  return fibImpl(0,1,n)
}

console.log(fib2(1000000));