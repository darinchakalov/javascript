function aggregateTable(input){
    let result = []
    let sum =0;
    for (let i =0; i< input.length; i++){
        let tokens = input[i].split('|').filter(s => s != '')
        result.push(tokens[0].trim())
        sum += Number(tokens[1])
    }
    console.log(result.join(', '));
    console.log(sum); 
}

aggregateTable(['| Sofia | 300',
    '| Veliko Tarnovo | 500',
    '| Yambol | 275'])