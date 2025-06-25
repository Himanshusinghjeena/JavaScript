// 49. Capitalize First Letter of Each Word in String

// Write a JavaScript program to capitalize the first letter of each word in a given string.  

function getFirstCapital(str){
    let tempStr = str.split(" ");
    for(let i=0 ; i<tempStr.length;i++){
         let word = tempStr[i].split("");
         word[0]=word[0].toUpperCase();
         tempStr[i]= word.join("");
    }
    return tempStr.join(" ");
}

console.log(getFirstCapital("the quick brown fox"))