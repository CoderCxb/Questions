console.log('sync start');  

setTimeout(function() {
  console.log('setTimeout1');    
  new Promise(function(resolve) {
      console.log('promise0');   
      resolve()
  }).then(function() {
      console.log('setTimeout promise resolved');    
  })
});

setTimeout(function() {
  console.log('setTimeout2');   
});

async function asyncFn1(){
  console.log('asyncFn1');
  Promise.resolve().then(()=>{
    console.log('asyncFn1 promise');
  })
}

async function asyncFn2(){
  console.log('asyncFn2 start');
  await asyncFn1();
  console.log('asyncFn2 end');
}

const P = new Promise(function(resolve) {
  console.log('promise');
  for (var i = 0; i < 10000; i++) {
      if(i === 10) {
          console.log('for');  
      }
      if (i === 9999) {
          resolve('resolve1');
      }
  }
}).then(function(val) {
  console.log(val);   
  asyncFn2();
}).then(function() {
  console.log('resolve2');   
});


new Promise(function(resolve) {
  console.log('promise2');   
  resolve('resolve3');
}).then(function(val) {
  console.log(val);   
})

console.log('sync end');

// sync start
// promise
// for
// promise2
// sync end
// resolve1
// asyncFn2 start
// asyncFn1
// resolve3
// asyncFn1 promise
// asyncFn2 end
// resolve2
// setTimeout1
// promise0
// setTimeout promise resolved
// setTimeout2