function lastKnumbers(n,k){
    let result =[1]
    for (let i = 1; i < n; i++){
        result[i] = result.slice(Math.max(0, result.length - k), i + k).reduce((a,b) => {return a+b})
    }
    console.log(result.join(' '))
}

console.log(lastKnumbers(9,5))