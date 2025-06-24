// 18. Check if Integer is Within 20 of 100 or 400

// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

function testhundred(num) {
    if ((Math.abs(num - 100) <= 20) || (Math.abs(400 - num) <= 20)) {
        return true;
    }
    return false;
}

console.log(testhundred(100));
console.log(testhundred(80));
console.log(testhundred(200));
console.log(testhundred(401));
console.log(testhundred(10));