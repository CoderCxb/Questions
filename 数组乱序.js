let arr=[1,2,3,4,5,6,7,8,9,10];

function getRandomArr(arr){
    let myArr=(JSON.parse(JSON.stringify(arr)));
    let newArr=[];
    while(myArr.length>0){
        newArr.push(...([].splice.call(myArr,myArr.length*Math.random(),1)))
    }
    return newArr;
}

let count=0;

for (let index = 0; index < 10000; index++) {
    let a=getRandomArr(arr)
    if(a[0]===1){
        count++;
    }
}
console.log(count);
// console.log(getRandomArr(arr));