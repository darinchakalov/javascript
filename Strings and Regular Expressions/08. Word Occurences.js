function wordOccurences([string, word]) {
    var regexExpression ="\\b(" + word + ")\\b";
    var regex = new RegExp(regexExpression, "ig");
    let result = []
    while ( match = regex.exec(string) ){
        result.push(match);
    }
    console.log(result.length); 
}

wordOccurences(['The waterfall was so high, that the child couldn’t see its peak.', 'the'])


//second version 

function wordOccurences(string, word) {

    let regex = new RegExp('\\b'+ word + '\\b', 'gi')
    let res = string.match(regex)

    let result = res == null ? 0 : res.length
    return result
}

console.log(wordOccurences('The waterfall was so high, that the child couldn’t see its peak.', 'the'))
