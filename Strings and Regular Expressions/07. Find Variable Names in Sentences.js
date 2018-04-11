function findVariableNamesinSentences(string){
    string = string.split(' ')
    let regex = /[_]\w+/g
    let result = []
    for (const word of string) {
        let match = regex.exec(word)
        while (match) {
            result.push(match[0].replace('_', ''))
            match = regex.exec(word)
        }
    }
    console.log(result.join(','));
}

findVariableNamesinSentences('Calculate the _area of the _perfectRectangle object.')