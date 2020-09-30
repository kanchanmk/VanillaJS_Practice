/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

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
	let carry = 0;
	let newArray = [];
	let val = 0;
	if (l1.val != 0 && l2.val != 0) {
		while (l1 && l2) {
			val = l1.val + l2.val + carry;
			carry = 0;
			if (val >= 10) {
				val = val - 10;
				carry = 1;
			}
			newArray.push(val);
			console.log(`value in while ${val}`);
			if (l1.next) {
				l1 = l1.next;
				if (l2.next) {
					l2 = l2.next;
				} else {
					l2.val = 0;
					console.log("breaking l2 not l1");
				}
			} else {
				l1.val = 0;
				console.log("breaking l1 ");
				if (l2.next) {
					l2 = l2.next;
				} else {
					l2.val = 0;
					console.log("breaking l2 & l1");
					break;
				}
			}
		}
		console.log(" newArray after while ", newArray);
		val = l1.val + l2.val + carry;
		console.log(`val ${val}`);

		if (val >= 10) {
			val = val - 10;
			newArray.push(val);
			newArray.push(1); // push carry
		} else if (val != 0) {
			newArray.push(val);
		}

		console.log(" newArray ", newArray);
		let next = null;
		for (let j = newArray.length - 1; j >= 0; j--) {
			next = new ListNode(newArray[j], next);
		}

		return next;
	} else if (l1.val != 0) {
		return l1;
	} else if (l2.val != 0) {
		return l2;
	} else {
		return new ListNode(0, null);
	}
};
//===== test 1
// l13 = new ListNode(3, null);
// l12 = new ListNode(4, l13);
// l11 = new ListNode(2, l12);

// l23 = new ListNode(4, null);
// l22 = new ListNode(6, l23);
// l21 = new ListNode(5, l22);
//======test 2
// l12 = new ListNode(8, null);
// l11 = new ListNode(9, l12);

// l21 = new ListNode(1, null);
//==== test 3
// l13 = new ListNode(9, null);
// l12 = new ListNode(9, l13);
// l11 = new ListNode(8, l12);

// l21 = new ListNode(2, null);

//==== test 4
l23 = new ListNode(9, null);
l22 = new ListNode(9, l23);
l21 = new ListNode(8, l22);

l11 = new ListNode(2, null);

addTwoNumbers(l11, l21);
