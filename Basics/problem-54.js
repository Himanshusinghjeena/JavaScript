// 54. Check Equal Number of 'p's and 't's

// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  

function isEqualTAndP(str){
    let pCount=0;
    let tCount=0;
    let chars = str.split("");
    for(let i=0;i<chars.length;i++){
        if(chars[i].toLowerCase()==='p'){
            pCount++;
        }
        else if(chars[i].toLowerCase()==='t'){
            tCount++;
        }
    }
    return tCount===pCount;
}
console.log(isEqualTAndP("paatpss"))
console.log(isEqualTAndP("paatps"))