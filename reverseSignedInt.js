var reverse = function (x) {
	array = (Math.abs(x) + "").split("");
	str = array.reverse().join("");
	reversed = Math.sign(x) * parseInt(str);
	if (Math.abs(reversed) > Math.pow(2, 31)) {
		return 0;
	} else {
		return reversed;
	}
};

//console.log(reverse(0));

var isPalindrome = function (x) {
	if (x < 0) {
		return false;
	} else {
	}
};

isPalindrome(121);
