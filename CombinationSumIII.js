/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
	let combinationArr = [];
	let sum = 0;
	let newCombination = [];
	for (let i = 1; i <= 9 - sum; i++) {
		if (sum < n || newCombination.length !== k) {
			newCombination.push(i);
			sum += i;
		}
		if (sum === n && newCombination.length === k) {
			combinationArr.push(newCombination);
			newCombination = [];
			break;
		}

		console.log("sum: ", sum, " newCombination: ", newCombination);
	}
};

combinationSum3(3, 7);


getSelectedOptions(options: any) {
		let selectedOptions: string[] = [];
		for (const [key, value] of Object.entries(options)) {
			// console.log(`${key}: ${value}`);
			if (value) {
				console.log(`pushed ${key}: ${value}`);
				selectedOptions.push(key);
			}
		}
		console.log(`selectedOptions {{selectedOptions}}`);
		console.log(`selectedOptions length {{selectedOptions.length}}`);
		return selectedOptions;
	}