const calculatePay = (wage, hours) => {
	let paycheck = 0;

	if (hours > 40) {
		paycheck = 40 * wage + (hours - 40) * 1.5 * wage;
	} else {
		paycheck = hours * wage;
	}
	console.log(hours, " ", wage, "= ", paycheck);
	return paycheck;
};

weeksToMillionaire = (wage, hours) => {
	wks = Math.ceil(1000000 / calculatePay(wage, hours));
	console.log(` weeks : ${wks}`);
};

weeksToMillionaire(10, 20);
weeksToMillionaire(10, 40);
weeksToMillionaire(10, 50);
weeksToMillionaire(12, 60);
