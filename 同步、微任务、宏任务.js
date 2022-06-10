// 1. 例1
console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
    Promise.resolve().then(function(){
      console.log('nested promise')
    })
    setTimeout(() => {
      console.log('setTimeout');
    }, 0);
  })
  .then(function () {
    console.log('promise2');
  })
  .then(function () {
    console.log('promise3');
  });

console.log('script end');

// Tasks	    宏任务 
// Microtasks 微任务	
// JS stack	  JS堆栈
// promise的then 无论是链式调用亦或是嵌套调用 都是在微任务中 因此 都会在setTimeout前执行 

// script start
// script end
// promise1
// promise2
// setTimeout



// script start
// script end
// promise1
// nested promise
// promise2
// promise3
// setTimeout
// setTimeout