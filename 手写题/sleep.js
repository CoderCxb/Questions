// 17:22
// 大表哥
// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan("Hank")输出:
// Hi! This is Hank!
// [表情]
// LazyMan("Hank").sleep(10).eat("dinner")输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
// [表情]
// LazyMan("Hank").eat("dinner").eat("supper")输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
// [表情]
// LazyMan("Hank").sleepFirst(5).eat("supper")输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
// [表情]
// 以此类推。￼
// 大表哥
// [表情]￼

// class LazyMan{
//   delayTime = 0;
//   name;
//   constructor(name){
//     this.name=name;
//     console.log(`Hi This is ${this.name}`);
//   }

//   sleep(delay){
//     this.delayTime += delay * 1000 ;
//     return this;
//   }

//   eat(value){
//     setTimeout(()=>{
//       console.log(`Wake up after ${value}`);
//       console.log(`Eat ${value}`);
//     },this.delayTime);
//     return this;
//   }
// }

// new LazyMan("Hank").sleep(5).eat("dinner").sleep(5).eat('Supper');


function sleep (delay){
  for(let d = new Date(); new Date() - d < delay;){}
}

sleep(5000);
console.log('over');

