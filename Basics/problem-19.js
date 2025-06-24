// 19. Check if One Integer is Positive and One is Negative

// Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

function checkIsPostiveNegative(a,b){
    if((a>=0 && b<0) || (a<0 && b>=0)){
        return true;
    }
    return false;
}

console.log(checkIsPostiveNegative(2,-2));
console.log(checkIsPostiveNegative(2,2));
console.log(checkIsPostiveNegative(0,-2));
console.log(checkIsPostiveNegative(-1,-2));
console.log(checkIsPostiveNegative(2,0));