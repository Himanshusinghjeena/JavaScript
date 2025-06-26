// 53. Check 'a' and 'b' Separated by Exactly 3 Places

// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.  

function checkifExactly3(str){
 return (/a...b/).test(str) || (/b...a/).test(str)
}
console.log(checkifExactly3("Chainsbreak"));
console.log(checkifExactly3("pane borrowed"));
console.log(checkifExactly3("abCheck"));