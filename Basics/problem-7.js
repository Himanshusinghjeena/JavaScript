// 7. Random Integer Guess Game
// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  

import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});
const num = Math.ceil(Math.random()*10);
// console.log("Computer number:",num)
rl.question('Guess the number between 1 and 10: ',(input)=>{
    const guess = parseInt(input,10);
    // console.log("Guessed Number:",guess)
    if(guess=== num){
        console.log("Good Work")
    }
    else{
        console.log("Not matched num is",num)
    }
})
