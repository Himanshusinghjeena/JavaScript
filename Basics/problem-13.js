// Get File Extension of Filename
// Write a JavaScript exercise to get the filename extension.

import { createInterface } from 'readline';

const rl = createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("enter your file name: ",(fileName)=>{
   const ext =  fileName.split('.').pop();
   console.log(`extension of ${fileName} is: ${ext}`)
})