// 55. Divide Numbers and Format with Commas

// Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.  



function divideAndFormatNumber (a,b){
    if(a<0 || b<0) return;
    return (a/b).toLocaleString(undefined,{maximumFractionDigits:2})
}

console.log(divideAndFormatNumber(22,7))
console.log(divideAndFormatNumber(1000000,107))