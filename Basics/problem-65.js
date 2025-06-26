// 65. Return City Name if Starts with 'Los' or 'New'

// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank. 


function startsWith(str){
    if(str.length<3) return ;
   if( str.substring(0,3).toLowerCase() === 'los' || str.substring(0,3).toLowerCase() === 'new' ) return str;
   return '';
}

console.log(startsWith("New York"))
console.log(startsWith("Los Angeles"))
console.log(startsWith("London"))