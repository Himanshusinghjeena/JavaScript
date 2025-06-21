// 1. Display Current Day and Time
//  Write a JavaScript program to display the current day and time in the following format.  


function displayCurrentTime() {
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let date = new Date();
    let time = date.toTimeString().split(' ')[0];
    console.log("Time: ", time);
    console.log("Day: ", weekdays[date.getDay()]);
}
displayCurrentTime()