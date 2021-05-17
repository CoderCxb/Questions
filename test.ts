//@ts-nocheck
interface test {
	a: string;
	b?: string;
}

const test: test = { a: '1', b: '2' };
const { a } = { a: '1', b: '2' };
console.log(a);
