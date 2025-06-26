// 58. Extract First Half of Even-Length String

// Write a JavaScript program to extract the first half of a even string.  

function firstHalf(str){
    if(str.length%2 ===0){
        return str.substring(0,str.length/2)
    }
    return str;
}
console.log(firstHalf("Python"));
console.log(firstHalf("JavaScript"));
console.log(firstHalf("PHP"));