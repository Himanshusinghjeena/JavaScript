// 56. Create String of Specified Copies

// Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.

// This JavaScript program takes a string and a positive number as inputs, then creates a new string by repeating the given string the specified number of times. The result is a single string made up of the original string copied multiple times.


function getCopies(str,num){
    let copyStr="";
    if(num<0) return false;
    for(let i=0;i<num;i++){
        copyStr+=str;
    }
    return copyStr;
}

console.log(getCopies("abc",5))
console.log(getCopies("abc",0))
console.log(getCopies("abc",-2))