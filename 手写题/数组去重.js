let arr=[8,5,4,3,4,5,6,7,1,2,4,5,1,5,6,1,6,1];
// 1.使用Set进行去重
// set也可以为类数组去重(带有迭代器)
console.log(Array.from(new Set(arr)));
console.log([...new Set(arr)]);

// 2. 写一个方法去重
function unique(arr){
    let newArr=[];
    arr.filter(item=>{
        if(newArr.includes(item)){}
        else newArr.push(item);
    })
    return newArr;
}

console.log(unique(arr));
