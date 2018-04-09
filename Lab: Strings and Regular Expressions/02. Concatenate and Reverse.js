function concatenateAndReverse(string){
    let joinedString = (string.join(''))
    let chars = Array.from(joinedString)
    let reversedChars = chars.reverse()
    console.log(reversedChars.join(''));     
}

concatenateAndReverse(['darin', 'chakalov'])

// second version

function concatenateAndReverse(arr){
    console.log(arr.join('').split('').reverse().join(''));       
}

concatenateAndReverse(['darin', 'chakalov'])