// 3. Get Current Date in Various Formats
// Write a JavaScript program to get the current date.  mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let curr = new Date()
let date = curr.getDate()
let month = curr.getMonth() + 1;
let year = curr.getFullYear()
if(date < 10 ){
    date = "0" + date;
}
if(month < 10){
    month = "0" + month;;
}
console.log("mm-dd-yyyy: ", month+"-"+date+"-"+year);
console.log("mm/dd/yyyy: ", month + "/" + date + "/" +year);
console.log("dd-mm-yyyy: ", date+"-"+month+"-"+year);
console.log("dd/mm/yyyy: ", date+"/"+month+"/"+year);
// console.log(curr.toISOString().split('T')[0])