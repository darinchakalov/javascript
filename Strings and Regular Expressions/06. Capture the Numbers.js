function captureTheNumbers(text){
    let result = []
    let regex = /\d+/g
    for (const word of text) {
        let match = regex.exec(word)
        while (match) {
            result.push(match[0])
            match = regex.exec(word)
        }
    }
    console.log(result.join(' ')); 
}


captureTheNumbers(['The300 What is that? I think it’s the 3rd movie. Lets watch it at 22:45'])