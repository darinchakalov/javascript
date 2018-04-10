function censorship (text, words){
    for (let i =0; i < words.length; i++){
        let toBeReplaced =
        text = text.replace(new RegExp(words[i], 'g'), '-'.repeat(words[i].length))
    }
    console.log(text);    
}

censorship('roses are red, violets are blue', [', violets are', 'red'])

//second version

function censorship (text, words){
    for (let current of words){
        let replaced = '-'.repeat(current.length)
        while(text.indexOf(current) > -1){
            text = text.replace(current,replaced)
        }
    }
    console.log( text)    
}

censorship('roses are red, violets are blue', [', violets are', 'red'])