/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
	console.log("Inside");
	dummyHead = new ListNode(0);
	(p = l1), (q = l2), (curr = dummyHead);
	carry = 0;
	while (p != null || q != null) {
		x = p != null ? p.val : 0;
		y = q != null ? q.val : 0;

		sum = carry + x + y;
		console.log(x, " ", y, " ", sum);
		carry = Math.floor(sum / 10);
		curr.next = new ListNode(sum % 10);
		curr = curr.next;
		if (p != null) p = p.next;
		if (q != null) q = q.next;
	}
	if (carry > 0) {
		curr.next = new ListNode(carry);
	}
	return dummyHead.next;
};

//===== test 1
l13 = new ListNode(3, null);
l12 = new ListNode(4, l13);
l11 = new ListNode(2, l12);

l23 = new ListNode(4, null);
l22 = new ListNode(6, l23);
l21 = new ListNode(5, l22);
console.log(`---------------- Test # 1 ---------------`);
addTwoNumbers(l11, l21);
//======test 2
// l12 = new ListNode(8, null);
// l11 = new ListNode(9, l12);

// l21 = new ListNode(1, null);
// console.log(`---------------- Test # 2 ---------------`);
// addTwoNumbers(l11, l21);
// //==== test 3
// l13 = new ListNode(9, null);
// l12 = new ListNode(9, l13);
// l11 = new ListNode(8, l12);

// l21 = new ListNode(2, null);
// console.log(`---------------- Test # 3 ---------------`);
// addTwoNumbers(l11, l21);

// //==== test 4
// l23 = new ListNode(9, null);
// l22 = new ListNode(9, l23);
// l21 = new ListNode(8, l22);

// l11 = new ListNode(2, null);

// console.log(`---------------- Test # 4 ---------------`);
// addTwoNumbers(l11, l21);
