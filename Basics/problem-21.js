// 21. Remove Character at Specified Position in String

// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

function removeCharAt(str,index){
    if(index > str.length-1){
        return "enter valid index";
    }
    return str.slice(0,index) + str.slice(index+1);
}

console.log(removeCharAt("himanshu",3));
console.log(removeCharAt("himanshu",8));
console.log(removeCharAt("himanshu",0));