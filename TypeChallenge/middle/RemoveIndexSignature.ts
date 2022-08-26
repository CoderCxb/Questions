
type Foo = {
	[key: string]: any;
	foo(): void;
}


// 用来区别string和字面量，并且通过as进行限定
type RemoveIndexSignature<T extends Record<any,any>> = {
	[K in keyof T as K extends `${infer R}` ? R : never]: T[K]
};
  
type Res = RemoveIndexSignature<Foo>  // expected { foo(): void }
  
export {};