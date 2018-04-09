function extractText (text){
    let result = []
    text = text.split(' ').join(' ')    
    let left = text.indexOf('(')
    let right = text.indexOf(')')    
    let sub = text.substring(left, right)
    for (let i =0; i < text.length; i++){
        if (left < 0){
            break
        } 
        if (left < right){
        let sub = text.substring(left, right)
            left = text.indexOf('(', left + 1)
            right = text.indexOf(')', right + 1)
            result.push(sub)
        }
    }
    console.log(result.join(', ').replace(/\(/g, '').replace(/\)/g, ''));    
}

extractText('No )matches) in  (this case, (despite blabla ( more bla')


// second version

function extractText (text){
    let result = []
    
    while (true) {
        let startIndex = text.indexOf('(')
        if (startIndex < 0)
            break
        let endIndex = text.indexOf(')')
        if (endIndex == -1 || endIndex < startIndex)
            break;
        result.push(text.substring(startIndex + 1, endIndex))
        text = text.substring(endIndex + 1)
    }    
    console.log(result.join(', '));
}


