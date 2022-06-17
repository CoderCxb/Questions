function curry(fn, ...args1){
  function curried(...args2){
    args1.push(...args2);
    if(args1.length >= fn.length){
      return fn(...args1);
    }else{
      return curried
    }
  }
  return curried;
}


function sum(a,b,c,d){
  return a + b + c + d;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4));
console.log(curriedSum(1)(2)(3)(4));



console.log(new String('xxxx').toString());
