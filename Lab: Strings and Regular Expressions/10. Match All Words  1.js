function matchAllWords(string){
    console.log(string.split(/\W+/g).filter(w => w != '').join('|'))
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text')

//second version

function matchAllWords(string){
    let regex = /[a-zA-Z0-9_]+/g
    console.log(string.match(regex).join('|'));    
}