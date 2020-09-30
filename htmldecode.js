htmlDecode = (input) => {
	var doc = new DOMParser().parseFromString(input, "text/html");
	return doc.documentElement.textContent;
};

test =
	// "Hi there, I&#39;m Edward but you can call me Ed. I&#39;m nothing like the brooding and edgy vampire that I&#39;m...";
	"Hi there, I&amp;#39;m Edward but you can call me Ed. I&amp;#39;m nothing like the brooding and edgy vampire that I&amp;#39;m...";

// console.log(htmlDecode(test));

decodeHtmlCharCodes = (str) => {
	let newStr1 = str.replaceAll(/(&amp;)/gi, "&");
	console.log("decodeHtmlCharCodes 1    >>>>>>>>>", newStr1);
	let newStr = newStr1.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
		String.fromCharCode(charCode)
	);
	console.log("decodeHtmlCharCodes >>>>>>>>>", newStr);
	return newStr;
};

// decodeHtmlCharCodes(test);

// Write one Javascript statement on the indicated line that will make the printed number always be between 10 and 20. *
let x = 2;
let y = 8;
const a = function (b) {
	return function (c) {
		console.log(`x: ${x} y: ${y} b ${b} c${c}`);
		return x + y + Math.abs(b) + c;
	};
};

// Statement will go here

const fn = a(x);
x = 4;
console.log(fn(Math.random() * 10));
