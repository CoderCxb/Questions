/**
 * @description 链表末尾追加
 * @param {ListNode} firstNode 
 * @param {ListNode} listNode 
 */
function push(firstNode, listNode){
  let workNode = firstNode;

}

/**
 * @description 链表开头去除
 * @param {ListNode} firstNode 
 */
function shift(firstNode){
  let nextNode = firstNode.next;
  firstNode.next = null;
  return nextNode;
}


/**
 * 
 * @param {*} val 
 * @param {*} next 
 */
function ListNode(val, next = null){
  this.val = val;
  this.next = next;
}


let list = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3))));

push(list, new ListNode(4))
console.log(list);

list = shift(list)
console.log(list);

