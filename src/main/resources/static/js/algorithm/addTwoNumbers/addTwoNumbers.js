
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    const head = new ListNode();
    let cursor = head;
    let carry = 0;

    while (l1 || l2 || carry) {
        cursor.next = new ListNode();
        cursor = cursor.next;

        let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

        carry = val >= 10 ? 1 : 0;
        cursor.val = val % 10;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return head.next;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));