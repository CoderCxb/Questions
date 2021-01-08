// 组合函数
// 将函数依次调用 上一个函数的执行结果作为下一个函数的参数
const compose = (...args) => x => args.reduce((res, cb) => cb(res), x);

function test1(a){return a+' test1 ';}
function test2(b){return b+' test2 ';}

console.log(compose(test1,test2)('begin'));


// pre上一次return结果 next下一个参数
[1,2,3,4].reduce((pre,next)=>{
    console.log(pre,next);
    return next;
});