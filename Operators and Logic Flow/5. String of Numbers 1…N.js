function stringOfNumbers(input) {
    let output='';
    for (let i = 1; i <= input; i++) {
        output+= i.toString();

    }
    return output;
}


console.log(stringOfNumbers(6))