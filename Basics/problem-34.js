// 34. Check Character Between 2nd and 4th Positions in String
// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  

function charBetween2And4(str, char) {
    let newStr = str.split("");;
    for (let i = 1; i <= 3; i++) {
        if (char.toLowerCase() === newStr[i].toLowerCase()) {
            return true;
        }
    }
    return false;
}

console.log(charBetween2And4("python", 'y'));
console.log(charBetween2And4("JavaScript", "a"));
console.log(charBetween2And4("Console", "o"));
console.log(charBetween2And4("Console", "C"));
console.log(charBetween2And4("Console", "e"));
console.log(charBetween2And4("JavaScript", "S"));