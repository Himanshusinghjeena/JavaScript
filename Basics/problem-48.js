// 48. Replace Each Character with Next Alphabet Letter

// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
// This JavaScript program replaces each character in a string with the next character in the alphabet, and converts vowels to uppercase. It iterates through the string, modifies each character accordingly, and then constructs the new modified string.


function replaceWithNext(str) {
    let changedStr = str.split("");

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case ' ':
                break;
            case 'z':
                changedStr[i] = 'a';
                break;
            case 'Z':
                changedStr[i] = 'A';
                break;
            default:
                changedStr[i] = String.fromCharCode(changedStr[i].charCodeAt(0) + 1);
        }
        switch (changedStr[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                changedStr[i] = changedStr[i].toUpperCase();
                break;
        }
    }
    return changedStr.join("");
}

console.log(replaceWithNext("PYTHON"));
console.log(replaceWithNext("W3R"));
console.log(replaceWithNext("php"));