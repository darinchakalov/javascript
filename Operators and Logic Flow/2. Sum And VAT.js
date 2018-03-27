function sumVat(input) {
    let sum =0;
    for(let num of input)
        sum +=num;
    console.log("sum="+sum);
    console.log("VAT="+sum*0.20);
    console.log("total="+sum*1.20);
}


sumVat([1,12,4.5])


//second version

function sumVata(numbers) {
    let sum =0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log("sum="+sum);
    console.log("VAT="+sum*0.20);
    console.log("total="+sum*1.20);
}

sumVata([2,4,5.5])