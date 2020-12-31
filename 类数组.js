// 像arguments这样的 带有length 属性名是数字 但是并不是真的数组的对象 称为类数组
// 类数组不能直接使用数组的方法 但是可以通过[].methodName.call(pseudoArray)的方法调用
function test(){
    [].forEach.call(arguments,(item=>{
        console.log(item);
    }))
}

test(1,2,3,4,5);