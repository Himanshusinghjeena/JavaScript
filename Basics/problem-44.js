// 44. Check if Integer is 15, or Sum/Difference is 15

// Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  


function is15(a,b){
     return (a===15 || b===15 || (a+b===15) || Math.abs(a-b)===15 )

}
console.log(is15(15,9))
console.log(is15(25,15))
console.log(is15(7,8))
console.log(is15(25,10))
console.log(is15(5,9))
console.log(is15(7,9))
console.log(is15(9,25))