// 8. Days Left Before Christmas
// Write a JavaScript program to calculate the days left before Christmas.


const date = new Date();
const year = date.getFullYear();
const christmasDate = new Date(`${year}-12-25`);

let daysLeft = Math.ceil(Math.abs((date-christmasDate)/(1000 *60*60 *24)))
console.log(daysLeft,"days to christmas")
