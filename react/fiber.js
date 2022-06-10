const rootFiber = require('./elements');
function sleep (delay){
  for(let d = new Date(); new Date() - d < delay;){}
}

import rootFiber from './elements.js';
let nextUnitOfWork = rootFiber;
let startTime = Date.now();

function workLoop(deadline){
  while((deadline.timeRemaining() > 1 || deadline.didTimeout) && nextUnitOfWork){
    nextUnitOfWork = performanceOfWork(nextUnitOfWork)
  }
  if(!nextUnitOfWork){
    console.log('render阶段结束');
    console.log('花费时间', Date.now() - startTime);
  }else{
    requestIdleCallback(workLoop,{timeout: 1000})
  }
}

function performanceOfWork(fiber){
  beginWork(fiber);
  if(fiber.next){
    return fiber.next;
  }
  while(fiber){
    completeUnitOfWork(fiber)
    if(fiber.sibling){
      return fiber.sibling;
    }
    fiber = fiber.return;
  }
}

function completeUnitOfWork(fiber){
  console.log('结束', fiber.key);
}

function beginWork(fiber){
  console.log('开始', fiber.key);
  sleep(20)
}
 
// 之所以多了500ms, 因为刚开始浏览器要拉取资源
requestIdleCallback(workLoop, {timeout: 1000})