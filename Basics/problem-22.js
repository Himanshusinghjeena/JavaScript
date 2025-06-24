// 23. Swap First and Last Characters in String

// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  

function swapFirstLast(str) {
    let chars= str.split("");
    [chars[0],chars[chars.length-1]] = [chars[chars.length-1],chars[0]]
    return chars.join("");
}

console.log(swapFirstLast("himanshu"))
console.log(swapFirstLast("Amit"))
console.log(swapFirstLast("Ankit"))
console.log(swapFirstLast("Gaurav"))