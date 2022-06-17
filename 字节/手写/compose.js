function compose(...fns){
  return fns.reduce((pre,cur)=>{
    if(pre instanceof Function){
      return cur(pre())
    }else{
      return cur(pre)
    }
  })
}



console.log(compose(function get(){
  return 0;
},function add (num){
  return num + 1
}, function sub(num){
  return num - 2;
},function mul(num){
  return num * 3;
}));