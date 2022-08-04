// 获取数组类型中是否包含某一项
type MyIncludes<T extends any[], U> = U extends T[number] ? true : false;

type isPillarMen = MyIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
