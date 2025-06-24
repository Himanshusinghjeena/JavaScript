// 26. Check if String Starts with 'Java'

// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  
 function checkStartsWith(str){
    let checkStr ="java";
    if(str.length<4){
        return false
    }
    else{
        return str.slice(0,4).toLowerCase() === checkStr.toLowerCase(); 
    }
//    return  str.startsWith('Java')

 }

 console.log(checkStartsWith("javascript"))
 console.log(checkStartsWith("Java"))
 console.log(checkStartsWith("Python"))