// 33. Find Larger Number in Range 40?60

// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  

function largerInRange(a, b) {
    if (a < 0 || b < 0) return "enter positive number";
    if (a <= 60 && a >= 40 && b >= 40 && b <= 60) {
        if (a > b) {
            return a;
        }
        else if (a === b) {
            return "number's are same"
        }
        else {
            return b;
        }
    }
    return "not in inclusive range"

}

console.log(largerInRange(45, 60))
console.log(largerInRange(25, 60))
console.log(largerInRange(45, 80))
console.log(largerInRange(45, 45))
