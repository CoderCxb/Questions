function test() {
	console.log(test);
	console.log(test.caller);
	console.log(arguments.callee);
}
test();

let file = new File([], 'aaa.txt');
const fi;
