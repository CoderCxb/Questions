
// 1.匹配模式
// g: 全局模式 表示查找字符串的全部内容 而不是匹配到了就停止
// i: 不区分大小写 
// m: 多行模式 
// y: 粘附模式 
// u: Unicode模式 启动Unicode匹配
// s: dotAll模式 表示元字符 匹配任何字符 包括(\n和\r)

// lastIndex 当前匹配到的字符串的最后一个字符串的下标 默认为0 匹配成功才会更新 如果不成功 则不修改

// [^abc]      匹配不在[]中的任意一个
// [abc]       匹配[]中任意一个
// [0-9a-zA-Z] 匹配其中任意一个
// (x|y)       匹配其中一个
// \d 匹配数字 \D 匹配非数字字符
// \s 匹配空白字符 \S 匹配非空白字符
// \b 匹配单词边界 如'er\b' 可以匹配"never" 中的 'er'，但不能匹配 "verb" 中的 'er'
// \B 匹配非单词边界 和\b相反 'er\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'
// \n 匹配换行符 \r 匹配回车符
// \w 匹配字母、数字、下划线 等价于[0-9a-zA-Z_]
// \W 匹配非字母、数字、下划线 等价于[^0-9a-zA-Z_]
// \uxxxx 匹配Unicode字符
// + 匹配一个以上
// * 匹配任意个
// ? 匹配0个或一个
// {n} 匹配n次 如 o{2} 则匹配 oo
// {n,} 至少匹配n次 如o{2,} 则可以匹配 ooo...
// {n,m} 匹配n~m次 如o{2,3} 则可以匹配 oo 或 ooo
// ? 当?跟在(*, +, ?, {n}, {n,}, {n,m})这些限制符后面时 则是非贪婪模式(少匹配) 如 n* 本身是匹配0个或0个以上 加上? 则按最低的匹配 就直接匹配0个 n+? 则匹配一个n
// | 取其一  
// x\num   num匹配重复字符次数 x\1表示 xx    .\1表示 任意两个重复字符 如xx yy oo
let text2='10.0';

let text=`mom and dad and sister and \nmom`;
// exec() 每次返回一个匹配信息 如果使用g(全局模式) 则可以继续调用exec 匹配不到则为null 并将lastIndex置为0
// 若不使用g(全局模式) 多次调用exec 返回的都是同一个结果
// 返回一个类似数组的对象
// 匹配结果      索引       匹配字符串   组
// [result , index:number,input:string,groups]
let testG=/aaaa/g
// console.log(testG.exec(text));
// console.log(testG.lastIndex);

// i(不区分大小写)
let testI=/ME/i
// console.log(testI.exec(text));

// m(多行模式) 则^匹配开头时 \n后面都算新开了一行 
// 如上 如果开启m模式 则可以匹配到两次  如果关闭 则只能匹配一次 因此被当成一行 只有一个开头  结尾$同理
let testM=/^mom/gm
// console.log(testM.exec(text));
// console.log(testM.exec(text));

// s(dotAll模式) .可以匹配任何字符 包括 \n \r 
// 不开s模式 则.无法匹配\r \n
let testS=/.+/
// console.log(testS.exec(text));

// y(粘附模式) 表示从lastIndex开始匹配 碰到不满足字符就直接停止
// 例如下方例子 默认lastIndex=0 则从开头开始匹配 逐个字符进行比较 
// mom匹配成功 .*匹配所有 因此可以拿到整个字符串
// 但是 如果改成 nom.*  因为第一个字符n和m不相同 直接停止匹配 失败告终
let testY=/mom.*/ys
// testY.lastIndex=0
// console.log(testY.exec(text));


// 实例属性
let re=/.../giuyms
// console.log(re.global);       // true 是否标记了g 全局模式
// console.log(re.ignoreCase);   // true 是否标记了i 忽略大小写
// console.log(re.unicode);      // true 是否标记了u Unicode模式
// console.log(re.sticky);       // true 是否标记了y 粘附模式
// console.log(re.multiline);    // true 是否标记了m 多行模式
// console.log(re.dotAll);       // true 是否标记了s  .匹配任意字符
// console.log(re.lastIndex);    // 下一次搜索的起始位置 始终从0开始 匹配成功之后会更新
// console.log(re.flags);        // 正则表达式的标记字符串  gimsuy
// console.log(re.source);       // 正则表达式//中间的内容

// 静态属性
let str="this hash been a short summber"
let pattern=/.hort/g;
if(pattern.test(str)){
  // console.log(RegExp.input);         // 对应的字符串
  // console.log(RegExp.leftContext);   // 左侧内容
  // console.log(RegExp.rightContext);  // 右侧内容
  // console.log(RegExp.lastMatch);     // 最后匹配的文本
  // console.log(RegExp.lastParen);     // 最后匹配的捕获组
}

let str2="cat bat sat fat";
let pattern2=/.at/g;
// 相当于RegExp的exec方法 
console.log(str2.match(pattern2));
// 搜索符合的字符串 并返回索引 
console.log(str2.search(pattern2));
// 替换字符串 要替换全部时  需要使用g模式
console.log(str2.replace(pattern2,'abc'));

// localeCompare
let str3='Hello';
// 排序  如果应该排在str3前 返回1 相同 返回0  排在后面 返回-1
console.log(str3.localeCompare('World'));