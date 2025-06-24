// 23. Add First Character to Front and Back of String

// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

function addFrontBack(str){
    return str[0] + str + str[0]
}
console.log(addFrontBack("swift"))