// 41. Check Numbers in Strict or Soft Increasing Mode

// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 24, 31 or 22, 22, 31

function whichIncreasingOrder(x,y,z){
    if(z>y && y>x ) return "strict mode";
    if(y>=x && y<z && z>=y) return 'soft mode';
    return false; 
}

console.log(whichIncreasingOrder(10,15,31))
console.log(whichIncreasingOrder(22,22,31))
console.log(whichIncreasingOrder(10,23,13))