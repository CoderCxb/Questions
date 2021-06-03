function sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
               [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}


let arr=[1,10,88,2,4,6,7,3,5,9,8];


let sortArr=arr.sort((pre,next)=>{
    return pre-next;
})

console.log(sortArr);

console.log(sort(arr));