function diagonalSums(matrix){
    let normalDiagonal =0
    let backDiagonal =0
    for (let row =0; row < matrix.length; row++){
        for (let col =0; col < matrix[row].length; col++){
            if (row === col){
                normalDiagonal+= matrix[row][col]
                backDiagonal += matrix[row][matrix.length -1 - row]
            }
        }
    }
    console.log(normalDiagonal + ' ' + backDiagonal)
}


diagonalSums([[20, 50, 10],
              [8, 33, 145],
              [4, 12, 8]])



//shorter version

function diagonalSums(matrix){
    let normalDiagonal =0
    let backDiagonal =0
    for (let row =0; row < matrix.length; row++){
        normalDiagonal+= matrix[row][row]
        backDiagonal += matrix[row][matrix.length -1 - row]
    }
    console.log(normalDiagonal + ' ' + backDiagonal)
}


diagonalSums([[20, 50, 10],
              [8, 33, 145],
              [4, 12, 8]])