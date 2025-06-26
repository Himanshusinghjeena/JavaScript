// 53. Count Vowels in String

// Write a JavaScript program to count the number of vowels in a given string.  


function countVowel(str) {
    let chars = str.split("");
    let count = 0;
    for (let i = 0; i < chars.length; i++) {
        let ch = chars[i].toLowerCase();
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {

            count++;
        }
    }
    return count;
}

console.log(countVowel("Python"))
console.log(countVowel("w3resource.com"))