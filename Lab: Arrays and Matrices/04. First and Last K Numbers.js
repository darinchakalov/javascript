function lastKnumbers(input){
    let k = input[0]
    let firstk = []
    let lastk = []
    for (let i = 1; i<= k; i++){
        firstk.push([input[i]])
    }
    for (let i = input.length-k; i < input.length; i++){
        lastk.push(input[i])
    }
    console.log(firstk.join(' '))
    console.log(lastk.join(' '))
}

console.log(lastKnumbers([2,7,8,9]))


// second version

function lastKnumbers(input){
    let k = input[0]
    let firstk = input.slice(1,k+1)
    let lastk = input.slice(input.length-k, input.length)
    console.log(firstk.join(' '))
    console.log(lastk.join(' '))
}

console.log(lastKnumbers([2,7,8,9]))


// third version // arr.shift takes first position of array and removes it from the array
// if no second parameter is chosen slice will return all till the end of the array

function lastKnumbers(input){
    let k = Number(input.shift())
    console.log(input.slice(0,k).join(' '))
    console.log(input.slice(input.length-k).join(' '))
}

console.log(lastKnumbers([2,7,8,9]))