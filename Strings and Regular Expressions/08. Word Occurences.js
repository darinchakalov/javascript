function wordOccurences(text, word){
    let regex = new RegExp("\\b"+word+"\\b", "i")    
    let count = 0
    
    for (const w of text) {
        let match = regex.exec(w)
        while (match) {
            count++
            match = regex.exec(w)
        }
    }
    console.log(count);
}

wordOccurences('The waterfall was so high, that the child couldn’t see its peak.', 'the')
