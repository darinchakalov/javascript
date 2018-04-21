function countWordsWithMap (arr){
    let myMap = new Map()
    for (let str of arr) {
        let words = str.split(/\W+/).filter(s => s.trim() !== '')
        for (let word of words) {
            word = word.toLowerCase()
            if(myMap.has(word)){
                myMap.set(word, myMap.get(word) +1)
            }else{
                myMap.set(word, 1)
            }
        }
    }
    let sortedKeys = Array.from(myMap.keys()).sort((a,b) => a.localeCompare(b))
    for (let key of sortedKeys) {
        console.log(`'${key}'` + " -> " + myMap.get(key) + ' times');   
    }    
}

countWordsWithMap(['Far too slow, you\'re far too slow.'])


// second version

function countWordsWithMap (arr){
    let words = arr.join('\n').toLowerCase().split(/\W+/).filter(s => s != '')
    let wordCount = new Map()
    for (let w of words){
        wordCount.has(w) ? wordCount.set(w, wordCount.get(w) + 1) : wordCount.set(w, 1)
    }
    let allWords = Array.from(wordCount.keys()).sort()
    allWords.forEach(w => console.log(`'${w}' -> ${wordCount.get(w)} times`));
    
}

countWordsWithMap(['Far too slow, you\'re far too slow.'])