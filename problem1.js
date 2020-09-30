// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	let partnerIndex = 0;
	let i = 0;
	for (i = 0; i < nums.length; i++) {
		partnerIndex = nums.indexOf(target - nums[i], i + 1);
		console.log(`partnerIndex: ${partnerIndex}`);
		if (partnerIndex != -1) {
			//console.log(`returning `);
			break;
		}
	}
	return [i, partnerIndex];
};

const nums = [-1, -2, -3, -4, -5]; // [0, 4, 3, 0];
const target = -8; // 0;

console.log(twoSum(nums, target));
