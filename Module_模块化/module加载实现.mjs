// ES6模块的this指向undefined 因此可以通过判断this===undefined来判断是否处在ES6模块

// 1.ES6模块和CommonJS模块的差异
// a) CommonJS模块输出的是值的拷贝 而ES6输出的是值的引用
// b) CommonJS模块是运行时加载 而ES6是编译时输出接口
// c) CommonJS模块是同步加载模块 而ES6的import命令是异步加载，有一个独立的模块依赖的解析环节

// CommonJS加载的是一个对象(module.exports属性) 该对象只有在脚本运行完成时才会生成。而ES6模块不是对象，它的对外接口是静态定义的，在代码静态解析截断就能生成。

// CommonJS模块输出的是值的拷贝 而ES6输出的是值的引用
// CommonJS模块是运行时加载的 加载完毕之后返回一个对象 并且是有缓存的
// ES6模块在JS引擎对脚本进行静态解析的时候 遇到import 就会生成一个只读引用。等到脚本真正运行的时候，在根据这个引用去ES6模块中去取值

// 目前Javascript有两种模块
// 一种是ES6，简称ESM;另一种是CommonJS，简称CJS

// CommonJS模块是Node.js专用，与ES6不兼容。
// 从 Node.js v13.2 版本开始，Node.js 已经默认打开了 ES6 模块支持。
// Node.js 要求 ES6 模块采用.mjs后缀文件名。也就是说，只要脚本文件里面使用import或者export命令，那么就必须采用.mjs后缀名。Node.js 遇到.mjs文件，就认为它是 ES6 模块，默认启用严格模式，不必在每个模块文件顶部指定"use strict"。
// 如果不希望将后缀名改成.mjs，可以在项目的package.json文件中，指定type字段为module。
// .mjs文件总是以 ES6 模块加载，.cjs文件总是以 CommonJS 模块加载，.js文件的加载取决于package.json里面type字段的设置。
