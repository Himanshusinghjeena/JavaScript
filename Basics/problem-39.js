// 39. Check if Integer is 8 or Difference/Sum Equals 8

// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  

function isEight(a,b){
    if( a === 8 || b===8 || a+b === 8 || Math.abs(a-b)===8 ) return true;
    return false;
}

console.log(isEight(7,8))
console.log(isEight(16,8))
console.log(isEight(24,32))
console.log(isEight(17,18))