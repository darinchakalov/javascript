function negativePositive (arr){
    let resultArr = []
    for(let i =0; i < arr.length; i++){
        let n = Number(arr[i])
        if ( n >= 0){
            resultArr.push(n)
        }
        else{
            resultArr.unshift(n)
        }
    }
    console.log(resultArr.join('\n'))
}

console.log(negativePositive([1,2,-5,7]))