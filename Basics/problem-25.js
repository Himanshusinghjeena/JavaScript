// 25. Add Last 3 Characters to Front and Back of String

// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.  

function str3BackFront(str){
 if(str.length>=3) {
    let last3 = str.slice(str.length-3);
    return last3 + str + last3;
 }
 return false;

}

console.log(str3BackFront("swift"))
console.log(str3BackFront("sw"))