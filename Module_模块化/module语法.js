// 由于模拟环境比较麻烦 因此此处直接讲解 代码是无法运行的

// 1.import
// 1.1 使用as指定别名
// import * as data from './test';       // 全部导入
// import { number as n } from './test'; // 部分导入

// 1.2 不允许修改传递进来的简单数据类型 但是可以修改引用数据类型
// 即便导出的时候用的是let或者var 在经过import后 还是const修饰的

// 1.3 import具有提升效果 会提升到整个模块的头部执行

// 1.4 import '' 直接执行模块 多次执行import也只会执行一次模块 如果有导入变量的时候 当变量没有使用的时候 模块是没有执行的

// 1.5 import的是最新的数据 即 export的数据发生改变 import获取的就是最新的数据

// 1.6 import {} from 'xxx' 并不是解构赋值 而是 named imports 语法上和解构赋值很像 但是并不是
// export default {name:'marco'}
// import {name} from 'xxx'  这样是获取不到name的 因为不是解构

// 1.7 import() 2020提案  用于动态加载模块
// import('./test').then((module) => {
// 	console.log(module);
// });

// 2.export
// 2.1 export default命令其实就是输出一个default变量 因此它后面不能跟变量声明 如 export default const num=0;而是应该写成 export default num; 后续可以跟上已声明变量或函数声明

// 2.2 export {num as n} num是已经定义的变量 as指定别名

// 3.export和import的复合写法 直接转发
// 直接转发另一个模块的内容 但是本模块无法使用 因为没有导入
// export * as data from './test';
