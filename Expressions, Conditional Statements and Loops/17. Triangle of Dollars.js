function dollarTriangle(num){
    for (let row = 1; row <= num; row++) {
        let line = '';
        for (let col = 1; col <= row; col++){
        line += '$';
        }
        console.log(line)
    }
    
}


console.log(dollarTriangle(3));

//2ri variant
function dollarTriangle2(num){
    for (let i = 1; i <= num; i++) {
        console.log(new Array(i+1).join('$'));        
    }
}

console.log(dollarTriangle2(3));

//3ti variant
function dollarTriangle3(num){
    for (let i = 1; i <= num; i++) {
        console.log('$'.repeat(i));
    }
}

console.log(dollarTriangle3(3));