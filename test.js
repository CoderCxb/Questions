class A {}
class B {}

let obj = {};
obj.__proto__ = A.prototype;
Object.setPrototypeOf(obj, new B());
console.log(Object.getPrototypeOf(obj));
console.log(obj instanceof A);
// console.log(Object.getPrototypeOf(A));
