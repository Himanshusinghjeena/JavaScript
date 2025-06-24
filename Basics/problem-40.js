// 40. Return 30, 40, or 20 Based on Same Numbers

// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.  


function isSame(a, b, c) {
    if (a === b && b === c) return 30;
    else if (a === b || a === c)  return 40;
    return 20;
}


console.log(isSame(8,8,8))
console.log(isSame(8,8,18))
console.log(isSame(8,7,18))