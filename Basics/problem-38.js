// 38. Sum Two Integers and Return Based on Range

// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.  


function getSum(a,b){
    if(a+b>= 50 && a+b <=80){
        return 65;
    }
    return 80;
}

console.log(getSum(30,20));
console.log(getSum(90,80));
