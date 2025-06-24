// 35. Check if Last Digit of Three Integers is Same

// Write a JavaScript program that checks whether the last digit of three positive integers is the same. 


function checkLastDigit(a, b, c) {
    if (a < 0 || b < 0 || c < 0) return false;
    if ((a % 10 === b % 10) && (b%10 === c%10) ){
        return true;
    }
    return false;
}


console.log(checkLastDigit(2,4,5));
console.log(checkLastDigit(20,40,50));
console.log(checkLastDigit(22,42,52));
console.log(checkLastDigit(22,44,55));