function fibImpl(a,b,n){
  // let buffer=Array(10000);
  if(n===0)return a;
  console.log(process.memoryUsage().rss);
  return fibImpl(b,a+b,n-1) 
}
function fib2(n){
  return fibImpl(0,1,n)
}

console.log(fib2(10000));
