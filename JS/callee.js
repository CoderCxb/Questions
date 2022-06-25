//  arguments中有一个属性callee 指向函数本身
function test(){
    console.log(arguments.callee);
}

test();