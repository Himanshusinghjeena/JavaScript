// 46. Check if Integer is in Range 40?10,000

// Write a JavaScript program to check whether a given number exists in the range 40..10000.  
// For example 40 presents in 40 and 4000

function isInRange(num){
    return (num>=40 && num<=10000 )
}

console.log(isInRange(45));
console.log(isInRange(79));
console.log(isInRange(30));