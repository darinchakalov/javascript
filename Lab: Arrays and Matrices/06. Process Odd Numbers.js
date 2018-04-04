function processOddNumbers(arr){
    let result =[]
    for (let i =0; i < arr.length; i++){
        if (i % 2 != 0){
            result.push(arr[i]*2)
        }
    }
    console.log(result.reverse().join(' '))
}

console.log(processOddNumbers([3,0,10,4,7,3]))

//second version

function processOddNumbers(arr){
    console.log(arr.filter((el, i) => i % 2 != 0).map(x => x*=2).reverse().join(' '))
}

console.log(processOddNumbers([3,0,10,4,7,3]))  
 