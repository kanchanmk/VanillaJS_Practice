detectCapitalUse = (word) => {
	if (word === word.toUpperCase()) {
		return true;
	} else if (word === word.toLowerCase()) {
		return true;
	} else if (word[0].toUpperCase() + word.substr(1).toLowerCase() === word) {
		return true;
	} else {
		return false;
	}
};

//console.log(detectCapitalUse("FlaG"));
/**
 * @param {number[]} A
 * @return {string}
 * Min : 00:00
 * Max : 23:59
 */
largestTimeFromDigits = (A) => {
	
	A.sort((a, b) => a - b);
	console.log("AFter sort ", A);

	const maxHH = 23;
	const maxMM = 59;
	let tempH = A[0] * 10;
	let index = 0;
	for (let i = 0; i < A.length; i++) {
		HTen = A[i] * 10;
		if (A[i] !== 0 && tempH < HTen && maxHH > tempH && maxHH > HTen) {
			console.log(
				"**** A[i] =",
				A[i],
				" tempH ==",
				tempH,
				" i ==",
				i,
				" HTen == ",
				HTen,
				" index == ",
				index
			);
			tempH = HTen;
			index = i;
		} else if (A[i] !== 0 && tempH >= HTen && maxHH > HTen) {
			console.log(
				"****+++++++ A[i] =",
				A[i],
				" tempH ==",
				tempH,
				" i ==",
				i,
				" HTen == ",
				HTen,
				" index == ",
				index
			);
			tempH = HTen;
			index = i;
		}
	}
	if (A[index] !== 0) {
		A.splice(index, 1);
	}
	console.log(" H Operation complete ", A);
	index = 0;

	// unit place
	let tempHH = tempH + A[0];
	for (let i = 0; i < A.length; i++) {
		tempHH = tempH + A[i];
		if (tempHH <= maxHH) {
			index = i;
		}
		console.log("tempHH ==", tempHH, " i ==", i, " index == ", index);
	}
	if(tempH)
	let HH = tempH + parseInt(A.splice(index, 1));

	console.log("HH OPERATION Complete ======== HH ", HH, " A ===== ", A);
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

	console.log(result);
	return result;

	// A.filter((num) => {
	// 	HTen = num * 10;
	// 	if (HTen <= maxHH && tempHH < HTen) {
	// 		tempHH = HTen;
	// 		A.splice
	// 	}
	// });

	// console.log("tempHH ", tempHH);

	// A.splice()

	// tempHH = A[0] * 10;
	// A.filter((num) => {
	// 	HTen = num * 10;
	// 	if (HTen <= maxHH && tempHH < HTen) {
	// 		tempHH = HTen;
	// 	}
	// });

	// console.log("tempHH ", tempHH);

	/////////////////

	// let indexOfTwo = A.indexOf(2);
	// console.log("indexOfTwo :", indexOfTwo);
	// if (indexOfTwo != -1) {
	// 	ht = 2;
	// 	A.splice(indexOfTwo, 1);
	// 	console.log("Sliced 2 === ", A);

	// } else if (A.indexOf(1) != -1) {
	// 	ht = 1;
	// 	A.splice(A.indexOf(1), 1);
	// 	console.log("Sliced 1 === ", A);
	// }
};
// let A = [1, 2, 3, 4];
let A = [0, 0, 5, 3]; // [4, 3, 2, 5];
//largestTimeFromDigits(A);



