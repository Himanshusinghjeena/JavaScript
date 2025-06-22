// Difference Between Number and 13
// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.


function calcDiff(n){
    if(n<=13){
        return 13-n;
    }else{
        return Math.abs((13-n)*2);
    }
}
console.log(calcDiff(32))
console.log(calcDiff(11))