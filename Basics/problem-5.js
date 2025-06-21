// 6. Check Leap Year (Gregorian Calendar)

// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  


function isLeap(year){
if((year%4 === 0 && year%100 !== 0 ) || (year%400===0)){
    console.log(year+" is a leap year");
}else{
    console.log(year + " not a leap year");
}
}
isLeap(2023)