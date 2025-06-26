// 64. Check if String Ends with 'Script'

// Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6. 

function endswith(str){
    let checkStr="script";
    if(str.length<6) return false;
    return str.substring(str.length-6).toLowerCase() === checkStr;
}

console.log(endswith("JavaScript"));
console.log(endswith("Java Script"));
console.log(endswith("Java Scripts"));