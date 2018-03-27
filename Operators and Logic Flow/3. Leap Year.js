function leapYear(year) {
    if((year % 4 == 0 && year % 100 != 0) || year % 400 === 0 ){
        console.log("yes");
    }
    else {
        console.log('no');
    }
}

console.log(leapYear(2016))



//presentation version

function leapYear(year) {
    let leap = (year % 4 == 0 && year % 100 != 0) ||
        (year % 400 == 0);
    console.log(leap ? "yes" : "no");
}