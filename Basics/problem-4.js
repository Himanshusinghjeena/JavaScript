// 4. Calculate Area of Triangle (Sides: 5, 6, 7)
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

function calcArea (a,b,c){
    let s = (a+b+c)/2 ;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c))
}

console.log("Area: "+calcArea(5,6,7));