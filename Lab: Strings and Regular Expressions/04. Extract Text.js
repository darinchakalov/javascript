function extractText (text){
    let result = []
    text = text.split(' ').join(' ')    
    let left = text.indexOf('(')
    let right = text.indexOf(')')    
    let sub = text.substring(left, right)
    for (let i =0; i < text.length; i++){
        if (left != -1){
            let sub = text.substring(left +1, right)
            left = text.indexOf('(', left + 1)
            right = text.indexOf(')', right + 1)
            result.push(sub)
        } 
    }
    console.log(result.join(', '));    
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')