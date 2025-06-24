// 30. Find Largest of Three Integers

// Write a JavaScript program to find the largest of three given integers.


function largestOfThree(a,b,c){
    if(a>b && a>c){
        return a
    }else if(b>a && b>c){
        return b;
    }
    else{
        return c
    }
}

console.log(largestOfThree(1, 0, 1));
console.log(largestOfThree(0, -10, -20));
console.log(largestOfThree(1000, 510, 440));