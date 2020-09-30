

/** 
Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

 

Example 1:

Input: [1,2,3,4]
Output: "23:41"
Example 2:

Input: [5,5,5,5]
Output: ""
*/
/**
 * @param {number[]} A
 * @return {string}
 * Min : 00:00
 * Max : 23:59
 */
largestTimeFromDigits = (A) => {
	
	A.sort((a, b) => a - b);

	const maxHH = 23;
	const maxMM = 59;
	let tempH = A[0] * 10;
	let index = 0;
	for (let i = 0; i < A.length; i++) {
		HTen = A[i] * 10;
		if (A[i] !== 0 && tempH < HTen && maxHH > tempH && maxHH > HTen) {

			tempH = HTen;
			index = i;
		} else if (A[i] !== 0 && tempH >= HTen && maxHH > HTen) {
			
			tempH = HTen;
			index = i;
		}
	}
	if (A[index] !== 0) {
		A.splice(index, 1);
    }
    
    //Reset
	index = 0;

	// unit place
	let tempHH = tempH + A[0];
	for (let i = 0; i < A.length; i++) {
		tempHH = tempH + A[i];
		if (tempHH <= maxHH) {
			index = i;
		}
	}
	if(tempH)
	let HH = tempH + parseInt(A.splice(index, 1));

	if (HH > maxHH) {
		return "";
	}

	// comparing last 2 digits
	let maxNum = Math.max.apply(null, A);
	let minNum = Math.min.apply(null, A);
	let MM = 0;
	let result = "";
	if (maxNum !== 0) {
		MM = maxNum * 10 + minNum;
		if (MM > maxMM) {
			return "";
		}
		result = HH + ":" + MM;
	} else {
		result = HH + ":00";
	}


	return result;


};
// let A = [1, 2, 3, 4];
let A = [0, 0, 5, 3]; // [4, 3, 2, 5];
largestTimeFromDigits(A);
