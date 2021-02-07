let num = 0;
// 1. || (短路或)    | (或)
// 返回第一个真值(有真值)或最后一个值(无真值)
// 注意：找到第一个真值后 不会判断后续的变量
console.log(0 || null); // null
console.log(2 || 1); // 2

console.log(1 | num++); // 1
console.log(num); // 0

// 2. && (短路与) & (与)
// 返回第一个假值(有假值) 或最后一个值(无假值)
// 注意：找到第一个假值后 不会判断后续的变量
console.log(2 && 1); // 1
console.log(1 && 0 && 2 && null && 3); // 0

// 3. ! (非)  !!(等效于if()中判断的逻辑)
// 3.1 将数值转成布尔类型
// 3.2 返回相反的值
console.log(!0);
console.log(!1);
console.log(!!0);
