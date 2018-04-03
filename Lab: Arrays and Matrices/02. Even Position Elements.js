function evenPossitionElements(input){
    let result = ''
    for (let i = 0; i<=input.length -1; i++){
        if (Number(i%2 == 0)){
            result+= `${input[i]} `
        }
    }
    return result
}
console.log(evenPossitionElements(['20', '30', '40'])) 