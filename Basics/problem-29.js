// 29. Remove 'Script' from String at 5th Position

// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.


function removeScriptIfAt5(str){
    if(str){
        let checkStr ="Script";
        if(str.slice(4,checkStr.length+4) === checkStr){
            return str.slice(0,4);
        }
        else{
            return str;
        }
    }
    return false;
}

console.log(removeScriptIfAt5("JavaScript"))
console.log(removeScriptIfAt5("CoffeeScript"))