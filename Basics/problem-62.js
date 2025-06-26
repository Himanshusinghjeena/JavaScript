// 62. Extract Middle 3 Characters from Odd-Length String

// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.  

function middle3Chars(str) {
    if (str.length % 2 !== 0 || str.length >= 3) {
        let mid = (str.length+1)/2;
        return str.substring(mid-2,mid+1)
    }
    return str;
}
console.log(middle3Chars("HTML5"))
console.log(middle3Chars("Python"))
console.log(middle3Chars("Exercises"))
console.log(middle3Chars("abcdefg"))

