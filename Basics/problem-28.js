//  Check if Three Integers are in Range 50?99

// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range. 


function isInRange(a,b,c){
    if((a>=50 && a<=99 ) || (b>=50 && b<=99) || (c>=50 && c<=99)){
        return true;
    }
    return false;
}

console.log(isInRange(50,90,99))
console.log(isInRange(5,9,199))
console.log(isInRange(65,89,199))
console.log(isInRange(65,9,199))