// 47. Reverse a Given String

// Write a JavaScript program to reverse a given string.  

function getReverse(str){
    let tempStr = str.split("");
    let reversed=[]
    for(let i=str.length-1;i>=0;i--){
        reversed.push(tempStr[i]);
    }
    return reversed.join("")
//    return str.split("").reverse().join("")
}
console.log(getReverse("python"))
console.log(getReverse("Javascript"))