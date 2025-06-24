// 32. Check if Two Numbers are in Specific Ranges

// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.


function isInTheRange(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)) {
        return true;
    }
    return false;
}
console.log(isInTheRange(44, 56))
console.log(isInTheRange(70, 95))
console.log(isInTheRange(50, 89))