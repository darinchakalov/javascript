function spiralMatrix(rows,cols){
    let targetNum = rows*cols
    let number = 1;
    let matrix = fillMatrixWithZeros(rows,cols)
    
    let currentRow = 0;
    let currentCol = 0;

    while (targetNum > number) {
        //top row
        for (let i =0; i < cols; i++){
            matrix[currentRow][currentCol++] = number++
        }
        // right col downwards
        currentCol-=1
        for(let i= ++currentRow; i<= rows -1; i++){
            matrix[currentRow++][currentCol] = number++
        }
        // bottom row
        for(let i= --currentCol; i>= 0 ; i--){
            matrix[currentRow][currentCol] = number++
        }
        break;
    }
    
    printMatrix(matrix)
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

spiralMatrix(5,5)