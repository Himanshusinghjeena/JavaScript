// 36. Modify String Based on Length (First 3 Lowercase/Uppercase)

// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  


function modifyString(str){
if(str.length<=3) return str.toUpperCase();
return str.substring(0,3).toLowerCase() + str.substring(3,str.length);
}

console.log(modifyString("Py"));
console.log(modifyString("Python"));
console.log(modifyString("JAVAScript"));