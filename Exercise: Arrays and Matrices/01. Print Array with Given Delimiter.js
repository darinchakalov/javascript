function printArrayDelimiter(arr){
    let delimiter = arr.pop()
    console.log(arr.join(delimiter))
}

printArrayDelimiter(['one','two','three','-'])