function evenPossitionElements(input){
    let resultArr = []
    for (let i = 0; i<=input.length -1; i++){
        if (Number(i%2 === 0)){
            resultArr.push(input[i])
        }
    }
    console.log(resultArr.join(' '))
}
console.log(evenPossitionElements(['20', '30', '40'])) 


// second version

function evenPossions(arr){
    console.log(arr.filter((element, i) => { return i % 2 === 0 }).join(' '))
}

console.log(evenPossions(['20', '30', '40'])) 
