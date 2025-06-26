// 57. Four Copies of Last 3 Characters

// Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.  

function getCopiesOfLast3Chars(str){
    if(str.length<3) return false;
    let tempStr = str.substring(str.length-3);
    return tempStr+tempStr+tempStr;
}

console.log(getCopiesOfLast3Chars("Python 3.0"));
console.log(getCopiesOfLast3Chars("JS"));
console.log(getCopiesOfLast3Chars("JavaScript"));