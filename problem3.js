const lengthOfLongestSubstring = (s) => {
	if (s && s.length != 0) {
        findSubstring(s);
    
    } else {
		return 0;
	}
};

const findSubstring = (s) =>
{
    let charArray = s.split("");
    previous = charArray[0];
    for(let i = 1; i < charArray.length ; i++){
        next = charArray[i];
        if()
    }

}

console.log("result : ", lengthOfLongestSubstring());

console.log("result : ", lengthOfLongestSubstring("abcabcbb"));

console.log("result : ", lengthOfLongestSubstring("bbbbb"));

console.log("result : ", lengthOfLongestSubstring("pwwkew"));
