// recursive method to get range of Numbers

function rangeOfNumbers(startNum, endNum) {
	if (startNum > endNum) {
		return [];
	} else {
		const numArr = rangeOfNumbers(startNum, endNum - 1);

		numArr.push(endNum);
		return numArr;
	}
}

console.log(rangeOfNumbers(12, 18));
