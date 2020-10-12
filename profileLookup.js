// Setup
var contacts = [
	{
		firstName: "Akira",
		lastName: "Laine",
		number: "0543236543",
		likes: ["Pizza", "Coding", "Brownie Points"],
	},
	{
		firstName: "Harry",
		lastName: "Potter",
		number: "0994372684",
		likes: ["Hogwarts", "Magic", "Hagrid"],
	},
	{
		firstName: "Sherlock",
		lastName: "Holmes",
		number: "0487345643",
		likes: ["Intriguing Cases", "Violin"],
	},
	{
		firstName: "Kristian",
		lastName: "Vos",
		number: "unknown",
		likes: ["JavaScript", "Gaming", "Foxes"],
	},
];

function lookUpProfile(name, prop) {
	// Only change code below this line
	var result = "";
	for (var i = 0; i < contacts.length; i++) {
		if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop)) {
			result = contacts[i][prop];
		} else if (
			contacts[i].firstName == name &&
			!contacts[i].hasOwnProperty(prop)
		) {
			result = "No such property";
		}
	}
	if (result == "") {
		result = "No such contact";
	}
	return result;

	// Only change code above this line
}

lookUpProfile("Kristian", "lastName");
