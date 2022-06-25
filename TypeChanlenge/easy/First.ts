// 获取数组的第一个值作为类型
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]


type First <A extends Array<any>> = A[0];

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3