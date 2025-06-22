// Create Variable with User-Defined Name
// Write a JavaScript exercise to create a variable using a user-defined name.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const variable ={}
rl.question("enter the variable name: ", (varName) => {
    rl.question("enter the value of variable: ", (varValue) => {
        variable[varName] = varValue;
        console.log(`${varName} = ${variable[varName]}`)
    })
})
