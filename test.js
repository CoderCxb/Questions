var patt1 = new RegExp('e');
patt1.compile('^a$');
console.log(patt1);

console.log(patt1.test('a'));
console.log(patt1.test('e'));
