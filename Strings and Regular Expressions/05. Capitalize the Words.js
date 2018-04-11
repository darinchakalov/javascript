function capitalizeTheWords(text){
    text = text.split(' ')
    let result = []
    for (let i =0; i< text.length; i++){
        let word = text[i]
        result.push(word[0].toUpperCase()+word.substring(1).toLowerCase())
    }
    console.log(result.join(' '))
}

capitalizeTheWords('Capitalize these words')