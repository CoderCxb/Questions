console.log('code start');
async function async2(){
  console.log('async2');
}

async function async1 (){
  console.log('async start1');
  await async2();
  console.log('async center');
  await async2();
  console.log('async end');
}


setTimeout(() => {
  console.log('setTimeout');
}, 0);

new Promise((resolve)=>{
  console.log('promise1 start');
  resolve();
}).then(()=>{
  Promise.resolve().then(()=>{
    console.log('Prmise3');
  }).then(()=>{
    console.log('Prmise4');
  })
  async1();
  console.log('promise1 end');
})

console.log('code end');

