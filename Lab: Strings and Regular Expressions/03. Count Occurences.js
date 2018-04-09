function countOccurences(str, text){
    let counter =0;
    let index = text.indexOf(str)
    for (let i =0; i < text.length; i++){
        if (index != -1){
            counter++
            index = text.indexOf(str, index + 1)
        }
    }
    console.log(counter);    
}

countOccurences('some', 'some other something')

