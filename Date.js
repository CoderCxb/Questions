// UTC:世界协调时间

// 一、日期显示方法
let date=new Date();
console.log(date); // 2021-02-09T02:40:19.100Z
console.log(date.toLocaleString()); // 2021-2-9 10:40:53
console.log(date.toUTCString()); // Tue, 09 Feb 2021 02:45:01 GMT

console.log(date.toDateString()); // Tue Feb 09 2021
console.log(date.toTimeString()); // 10:45:01 GMT+0800 (GMT+08:00)

console.log(date.toISOString()); // 2021-02-09T02:45:01.859Z
console.log(date.toJSON()); // 2021-02-09T02:45:01.859Z

console.log(date.toLocaleDateString()); // 2021-2-9
console.log(date.toLocaleTimeString()); // 10:45:01

// 2. 构造函数
console.log(new Date("May 23,2020")); // "月名 日+1,年"
console.log(new Date("5/23/2020"));
console.log(new Date("Wed, 10 Feb 2021 11:50:07 GMT"));
// console.log(Date.parse("May 23,2020")); // 接收参数同上 返回number 

// 3. 日期方法
// console.log(date.setTime(100000000000));  // 设置时间(时间戳)
date.setFullYear(1997);         // 设置年份 
date.setMonth(5);               // 设置月份
date.setDate(11);               // 设置日期
date.setHours(9);               // 设置时钟
date.setMinutes(30);            // 设置分钟
date.setSeconds(0);             // 设置秒钟
date.setMilliseconds(100);      // 设置毫秒数
console.log(date.toLocaleString()); 

console.log('获取时间戳:',date.getTime());
console.log('获取年份:',date.getFullYear());
console.log('获取月份:',date.getMonth()+1);
console.log('获取日期:',date.getDate());
console.log('获取时钟:',date.getHours());
console.log('获取分钟:',date.getMinutes());
console.log('获取秒钟:',date.getSeconds());
console.log('获取天数:',date.getDay());
console.log('获取毫秒数:',date.getMilliseconds());
console.log();
console.log();
console.log();
console.log();
