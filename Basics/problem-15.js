// 15. Sum Two Integers (Triple if Equal)

// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.


function getSum(a, b) {
    if (a === b) {
        return 3 * (a + b);
    }
    else {
        return a + b;
    }
}

console.log(getSum(10, 20));
console.log(getSum(10, 10));
