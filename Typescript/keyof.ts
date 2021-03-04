type a = string | number | symbol;
type Person = {
	[t in a]: any;
};
// keyof 遍历某种类型/对象的属性，并提取其属性的名称
type t1 = keyof {}; // never
type t2 = keyof any; // string | number | symbol
type t3 = keyof Person;
type t4 = keyof object;
