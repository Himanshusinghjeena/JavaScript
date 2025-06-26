// 59. Remove First and Last Characters in String

// Write a JavaScript program to create a new string without the first and last characters of a given string.  


function removeFirstAndLastChar(str){
    return str.substring(1,str.length-1);
}

console.log(removeFirstAndLastChar("javascript"))
console.log(removeFirstAndLastChar("js"))
console.log(removeFirstAndLastChar("PHP"))