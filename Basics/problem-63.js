// 63. Concatenate Strings with Matching Length

// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.  

function concatOfSameLength(str1,str2){
    if(str1.length === str2.length) return str1+str2;
    if(str1.length>str2.length){
        return str1.substring(0,str2.length)+str2
    }
    else{
         return str1+str2.substring(0,str1.length)
    }   
}

console.log(concatOfSameLength("Python", "JS"));
console.log(concatOfSameLength("ab", "cdef"));