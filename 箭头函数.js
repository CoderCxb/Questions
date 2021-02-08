// 1. 没有this super arguments new.target
// 2. 不能使用new关键字调用 因此箭头函数没有[[Construct]]
// 3. 没有原型
// 4. 不能改变this的指向

let test=()=>{}