// 51. Sort Letters Alphabetically in String

// Write a JavaScript program to convert letters of a given string alphabetically.  


function sortLetters(str){
     let chars = str.split('');
     for(let i=0;i<chars.length;i++){
        for(let j=0;j<chars.length-1-i;j++){
            if(chars[j] > chars[j+1]){
                [chars[j],chars[j+1]]= [chars[j+1],chars[j]]
            }
        }
     }
     return chars.join("")
}

console.log(sortLetters("Python"));
console.log(sortLetters("Exercises"));