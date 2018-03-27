function colorfulNumbers(num) {
    let result = '<ul>\n'
    for (let i = 1; i <= num; i++) {
        if (i % 2!= 0) {
            result += `<li><span style='color:green'>${i}</span></li>\n`
        }
        else{
            result += `<li><span style='color:blue'>${i}</span></li>\n`
        }
    }
    result+= '</ul>'
    return result;
}

console.log(colorfulNumbers(10))

function isPrimary(num){
    let prime = true;
    for (let d = 2; d <= Math.sqrt(num); d++) {
        if (num % d == 0){
            prime = false;
            break;
        }
    }
    return prime && (num > 1);
    console.log(prime)
}

console.log(isPrimary(5));