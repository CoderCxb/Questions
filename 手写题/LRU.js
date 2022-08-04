// 题
// 构建一个class LRU用于存储key-value, 接受参数设置最大容量
// get方法获取
// set方法设置
// 无论是get还是set都会使数据变'新鲜', set超出容量时,会删除最久的数据

// 知识点: Map的keys是按照set的顺序的, 不过如果set的时候,key已经存在,则直接覆盖,不影响keys的顺序

class LRU {
  capcity = 0;
  container = new Map();
  constructor(capcity){
    this.capcity = capcity;
  }
  get(key){
    let value = this.container.get(key)
    this.container.delete(key);
    this.container.set(key, value)
    return value;
  }
  set(key,value){
    this.container.set(key, value);
    let deleteKey = [...this.container.keys()][0];
    if(this.container.size > this.capcity){
      this.container.delete(deleteKey)
    }
  }
}



let lru = new LRU(2);

lru.set('a', 'a');
lru.set('b', 'b');

console.log(lru.get('a'));; // a

lru.set('c', 'c');

console.log(lru.get('b'));; // undefined