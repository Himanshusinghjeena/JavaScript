// 42. Check Rightmost Digits of Three Numbers

// Write a JavaScript program to check from three given numbers (non negative integers) that  all of them have the same rightmost digit.  

function isRightMostSame(a,b,c){
    if(a<0 || b<0 || c<0) return "enter only positive values";
    return  (a%10 === b%10) && (a%10 === c%10) && (b%10 === c%10)
}

console.log(isRightMostSame(12,22,32));
console.log(isRightMostSame(4,8,10));
console.log(isRightMostSame(4,8,-10));

