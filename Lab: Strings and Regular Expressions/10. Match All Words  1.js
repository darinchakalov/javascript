function matchAllWords(string){
    console.log(string.split(/\W+/g).filter(w => w != '').join('|'))
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text')
