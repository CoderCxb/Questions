/**
 * a 和 b 是任意类型的数据，当 a 和 b 的值和类型都相等的时候，返回true；
 * 
 * 例1：
 * console.log(equals(1, 1)); // true
 * 
 * 例2：
 * console.log(equals(1, '1')); // false
 * 
 * 例3：
 * console.log(equals([1,2,3], [1,2,3])); // true
 * 
 * 例4：
 * console.log(equals([1,2,3], [3,2,1])); // false
 * 
 * 例5：
 * console.log(equals([1,2,3], '[1,2,3]')); // false
 * 
 * 例6：
 * var person = {'name': 'Terry', 'age': 22};
 * var another = {'age': 22, 'name': 'Terry'};
 * console.log(equals(person, another)); // true
 * 
 * 例7：
 * var nameList = {0: 'Terry', 1: 'Jason', 2: 'Jacob'};
 * var anotherList = ['Terry', 'Jason', 'Jacob'];
 * console.log(equals(nameList, anotherList)); // false
 * 
 * 例8：
 * var person = {'name': 'Terry', 'age': 22};
 * var another = {'name': 'Terry', 'age': 23};
 * console.log(equals(person, another)); // false
 * 
 * @param a 任意类型的数据
 * @param b 任意类型的数据
 */
function equals(a,b) {
  // eat, sleep, show me the code ヽ(*^ｰ^)人(^ｰ^*)ノ

  if(Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)){
    return false;
  }

  if(!(a instanceof Object)){
    return Object.is(a,b);
  }

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if(keysA.length !== keysB.length){
    return false;
  }

  let res = true;
  for(let keyA of keysA){
    if(!keysB.includes(keyA)){
      res = false;
      break;
    }else{
      res = equals(a[keyA], b[keyA]);
    }
  }
  return res;
}

console.log(equals(1, 1)); // true

console.log(equals(1, '1')); // false

console.log(equals([1,2,3], [1,2,3])); // true

console.log(equals([1,2,3], [3,2,1])); // false

console.log(equals([1,2,3], '[1,2,3]')); // false

var person = {'name': 'Terry', 'age': 22};
var another = {'age': 22, 'name': 'Terry'};
console.log(equals(person, another)); // true

var nameList = {0: 'Terry', 1: 'Jason', 2: 'Jacob'};
var anotherList = ['Terry', 'Jason', 'Jacob'];
console.log(equals(nameList, anotherList)); // false

var person = {'name': 'Terry', 'age': 22};
var another = {'name': 'Terry', 'age': 23};
console.log(equals(person, another)); // false