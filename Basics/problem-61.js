// 61. Move Last 3 Characters to Start of String

// Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.  

function move3LastToFirst (str){
    if(str.length<3) return str
    return str.substring(str.length-3)+str.substring(0,str.length-3)
}
console.log(move3LastToFirst("python"))
console.log(move3LastToFirst("JavaScript"))
console.log(move3LastToFirst("HI"))