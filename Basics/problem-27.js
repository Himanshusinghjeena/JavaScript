// 27. Check if Two Integers are in Range 50?99
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  


function isInRange(a,b){
    if((a>=50 && a<=99 ) || (b>=50 && b<=99)){
        return true;
    }
    return false;
}

console.log(isInRange(12,101))
console.log(isInRange(52,80))
console.log(isInRange(15,99))
