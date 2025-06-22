// 6. Find Years When Jan 1 is Sunday (2014?2050)
// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  


for (let year = 2014 ; year <= 2050 ; year++){
var d = new Date(year, 0, 1);
if(d.getDay()===0){
    console.log("1st January will be sunday on ",year)
}
}