function biggestElementInMatrix(matrix){
    console.log(matrix.map(arr => arr.sort((a,b) => a<b)[0]).sort((a,b) => a<b)[0])
}

biggestElementInMatrix([[20,50,10],[8,33,145]])


//second version

function biggestElementInMatrix(matrix){
    let max = Number.NEGATIVE_INFINITY
    for (let row =0; row < matrix.length; row++){
        for (let col =0; col < matrix[row].length; col++){
            if(matrix[row][col] > max){
                max = matrix[row][col]
            }
        }
    }   
    console.log(max);    
}

biggestElementInMatrix([[20,50,10],[8,33,145]])


//third solution

function biggestElementInMatrix(matrix){
    let biggestNum = Number.NEGATIVE_INFINITY
    matrix.forEach(r => r.forEach(c => biggestNum = Math.max(biggestNum, c)));
    console.log(biggestNum);    
}

biggestElementInMatrix([[20,50,10],[8,33,145]])