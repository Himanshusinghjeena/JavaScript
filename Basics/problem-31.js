// 31. Find Closest Value to 100 from Two Numbers

// Write a JavaScript program to find the closest value to 100 from two numerical values.  


function getClosestTo100(a,b){
     let num1 = Math.abs(100-a); 
     let num2= Math.abs(100-b);
     if(num1<num2){
        return a;
     }
     if(num2<num1){
        return b;
     }
     else{
        return 0;
     }
}

console.log(getClosestTo100(1,2));
console.log(getClosestTo100(90,89));
console.log(getClosestTo100(-90,-89));
console.log(getClosestTo100(101,99));