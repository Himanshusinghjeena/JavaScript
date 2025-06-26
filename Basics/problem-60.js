// 60. Concatenate Two Strings Without First Character

// Write a JavaScript program to concatenate two strings except for their first character.  


function concatWithoutFirstLetter(str1,str2){
    return str1.substring(1)+str2.substring(1)
}
console.log(concatWithoutFirstLetter("PHP","JS"))
console.log(concatWithoutFirstLetter("A","B"))
console.log(concatWithoutFirstLetter("AA","BB"))