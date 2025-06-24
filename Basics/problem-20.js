// 20. Add 'Py' to Start of String if Not Present

// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string. 


function checkPy(str) {
    let pyStr = "py";
    if (str) {
        if (str.substring(0, 2).toLowerCase() === pyStr.toLowerCase()) {
            return str;
        }
        else {
            return pyStr + str;
        }
    }
}

console.log(checkPy("PYthon"));
console.log(checkPy("thon"));

