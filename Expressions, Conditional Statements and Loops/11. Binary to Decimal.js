function binaryToDecimal(input){
    let bin=Array.from(input)
    let binNum = 128;
    let result=0;
    for (let i = 0; i < bin.length; i++) {
        if(bin[i] === '1'){
            result+= binNum;
        }
        else{
            result+=0;
        }
        binNum /= 2;
    }
    return result;
}

console.log(binaryToDecimal('00001001'));
