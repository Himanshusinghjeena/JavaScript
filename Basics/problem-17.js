// 17. Check if Number or Sum is 50

// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  


function is50(a,b){
    if(a===50 || b===50 || (a+b===50) ){
        return true;
    }
    else{
        return false;
    }
}
console.log(is50(50,10))