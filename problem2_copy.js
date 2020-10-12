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
const toArray = (list) => {
	let newArray = [];
	while (list.next != null) {
		newArray.push(list.val);
		list = list.next;
	}

	newArray.push(list.val);
	console.log(`newARray: ${newArray}`);
	return newArray;
};
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
	l1array = toArray(l1);
	l2array = toArray(l2);
	let carry = 0;
	let newArray = [];
	if (l1array.length > l2array.length) {
		for (let i = l1array.length - 1; i >= 0; i--) {
			val = l1array[i] + l2array[i] + carry;
			carry = 0;
			if (val >= 10) {
				val = val - 10;
				carry = 1;
			}
			newArray.push(val);
		}
		//console.log(" newArray ", newArray);
		let next = null;
		for (let j = newArray.length - 1; j >= 0; j--) {
			next = new ListNode(newArray[j], next);
		}
	} else {
		for (let i = l2array.length - 1; i >= 0; i--) {
			val = l1array[i] + l2array[i] + carry;
			carry = 0;
			if (val >= 10) {
				val = val - 10;
				carry = 1;
			}
			newArray.push(val);
		}
	}
	// console.log(" newArray ", newArray, "   ", newArray.length);
	let next = null;
	for (let j = newArray.length - 1; j >= 0; j--) {
		next = new ListNode(newArray[j], next);
	}
	return next;
};

l13 = new ListNode(3, null);
l12 = new ListNode(4, l13);
l11 = new ListNode(2, l12);

l23 = new ListNode(4, null);
l22 = new ListNode(6, l23);
l21 = new ListNode(5, l22);

addTwoNumbers(l11, l21);
