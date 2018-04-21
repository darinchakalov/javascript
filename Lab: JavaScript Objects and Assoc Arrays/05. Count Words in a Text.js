function countTheWords (arr){
    let result = {}
    for (const str of arr) {
        let currentWords = str.split(/[^a-zA-Z0-9_]/)
            .filter(a => a != '')//this can be replaced with /\W+/ only
        for (const word of currentWords){
            if(result.hasOwnProperty(word)){
                result[word]++
            }else {
                result[word] = 1
            }
        }
    }
    console.log(JSON.stringify(result));
    
}

countTheWords(['JS devs use Node.js for server-side JS.-- JS for devs'])