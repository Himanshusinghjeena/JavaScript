// 50. Transform Number to Hours and Minutes

// Write a JavaScript application that transforms a provided numerical value into hours and minutes.  

function transformToHourMin(num){
    if(num>=60){
        let hour = Math.floor(num/60);
        let min = num%60;
        console.log(hour+":"+min);
    }
    else {
        console.log("00:"+num)
    }
}

transformToHourMin(51)
transformToHourMin(71)
transformToHourMin(450)
transformToHourMin(1441)