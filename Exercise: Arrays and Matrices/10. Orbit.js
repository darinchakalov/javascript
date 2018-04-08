function orbit(rows,cols,targetRow,targetCol){
    let number = 1;
    let matrix = fillMatrixWithZeros(rows, cols)

    matrix[targetRow][targetCol] = number

    printMatrix(matrix)

    while (!isMatrixFilled(matrix)) {
        number++
        let topX = Math.max(0, targetRow - 1)
        let topY = Math.max(0, targetCol - 1)
        let bottomX = Math.min(rows, targetRow + 1)
        let bottomY = Math.min(cols, targetCol + 1)

        for (let row =topX; row < bottomX; row++){
            for (let col = topY; col < bottomY; col++){
                let currentCell =matrix[row][col]
                if(currentCell != 0){
                    currentCell = number
                }
            }
        }
    }
    function isMatrixFilled(matrix){
        for (let row =0; row < matrix.length; row++){
            for (let col =0; col < matrix[row].length; col++){
                const element = matrix[row][col]
                if(element == 0){
                    return false
                }
            }
            return true
        }
    }
    function printMatrix(matrix){
        console.log(matrix.map(e => e.join(' ')).join('\n'));
    }
    function fillMatrixWithZeros(rows,cols){
        let matrix = []
        for(let i =0; i < rows; i++){
        matrix.push('0'.repeat(cols).split('').map(Number))
            }
        return matrix
    }
    
}

orbit(4,4,0,0)