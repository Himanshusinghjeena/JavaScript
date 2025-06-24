// 24. Check if Number is Multiple of 3 or 7

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. 

function isMultiple3or7(num){
 if(num>0){
    if( num % 3 == 0 || num % 7 == 0){
        return `${num} multiple of 3 or 7`
    }
 }
 return "enter positive number";
}
console.log(isMultiple3or7(9))