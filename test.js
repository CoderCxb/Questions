let requestList=[];

for (let index = 0; index < 10; index++) {
  requestList.push(new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(index);
    },(10-index)*100)
  }))
}

Promise.all(requestList);
