function rounding(input){
    let num = input[0];
    let round = input[1];
    let result=0;
    if (round > 15){
        round =15;
    }
    let multiplier = Math.pow(10, round)
    return Math.round(num * multiplier)/ multiplier;
}

console.log(rounding([3.1415926535897932384, 2]));

