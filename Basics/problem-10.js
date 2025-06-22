function fToC (ftemp){
    let totalC = (ftemp-32)*(5/9);
    console.log(`${ftemp}\xB0F is ${totalC}\xB0C.`)
}
function cToF (ctemp){
    let totalf = (ctemp*(9/5))+32;
    console.log(`${ctemp}\xB0C is ${totalf}\xB0F.`)
}
cToF(60);
fToC(45);