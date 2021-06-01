// 1. 普通递归写法
function fib(n){
  if(n<2) return n;
  else return fib(n-1)+fib(n-2);
}

console.log(fib(10));


// 2. 使用了尾调用优化 将开头的两个值作为初始条件 正向求值
function fib2(n){
  // 1) n<2 时，直接返回
  if(n<2) return n;
  function _fib2(n,a,b){
    if(n===0) return a;
    return _fib2(n-1,b,a+b);
  }
  return _fib2(n,0,1)
}

console.log(fib2(10));