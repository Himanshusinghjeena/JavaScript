// 16. Difference Between Number and 19 (Triple if >19)

// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  


import { createInterface } from "readline"; 

const rl = createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter Number:",(num)=>{
    if(num<=19){
        console.log(Math.abs(num-19));
    }
    else{
        console.log(Math.abs(3*(num-19)))
    }
})