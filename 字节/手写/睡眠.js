// u.console("breakfast").setTimeout(3000).console("lunch").setTimeout(3000).console("dinner"),实现这个u


class U {
  nowTime = + new Date();
  console(str){
    while(new Date() < this.nowTime){}
    console.log(str);
    this.nowTime = + new Date();
    return this;
  }
  setTimeout(timeout){
    this.nowTime += timeout;
    return this;
  }
}


let u = new U();
u.console("breakfast").setTimeout(3000).console("lunch").setTimeout(3000).console("dinner")