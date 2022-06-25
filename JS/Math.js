// 1. 数学公式、信息和计算相关
// 1.1 Math对象属性
console.log('自然对数基数:',Math.E);  
console.log('2为底的自然对数:',Math.LN2);
console.log('10为底的自然对数:',Math.LN10);
console.log('以2为底e的对数:',Math.LOG2E);
console.log('以10为底e的对数:',Math.LOG10E);
console.log('派---Π:',Math.PI);
console.log('1/2的平方根:',Math.SQRT1_2);
console.log('2的平方根:',Math.SQRT2);

// 1.2 方法
console.log('最小值:',Math.min(1,2,3,4,5));    //  1
console.log('最大值:',Math.max(1,2,3,4,5));    //  5
console.log('向上取整:',Math.ceil(8.88));      //  9
console.log('向下取整:',Math.floor(2.33));     //  2
console.log('四舍五入:',Math.round(5.5));      //  6
console.log('截取整数部分:',Math.trunc(8.88)); //  8
console.log('返回数值最接近的单精度值:',Math.fround(8.88));  //  8.880000114440918
console.log('0~1之间的随机数',Math.random());     // 
console.log('绝对值:',Math.abs(-100));           // 100
console.log('E的n次幂',Math.exp(2));             // e的n次幂 
console.log('返回x的自然对数:',Math.log(10));    // 2.302585092994046             
console.log('返回x的n次幂',Math.pow(2,10));      // 2的10次幂 1024
console.log('返回x的平方根:',Math.sqrt(4));      // 2
console.log('返回x的立方根:',Math.cbrt(8));      // 2
// 注意：单位不是° 本来sin30°是1/2 但是这里不是
console.log('返回x的正弦:',Math.sin(30));
console.log('返回x的余弦:',Math.cos(30));
console.log('返回x的正切:',Math.tan(30));