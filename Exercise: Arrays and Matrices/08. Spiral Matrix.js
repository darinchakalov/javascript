function spiralMatrix(rows,cols){
    let targetNum = rows * cols;
    let number = 1;
    let matrix = fillMatrixWithZeros(rows,cols)
    
    let currentRow = 0;
    let currentCol = 0;
    let rotations = 0;

    while (targetNum >= number) {
        //top row
<<<<<<< HEAD
        for (let i =0; i < cols; i++){
=======
        for (let i = rotations; i < cols - rotations; i++){
>>>>>>> 0210dc38b205999b64f073e0ac2ca8424540ddb4
            matrix[currentRow][currentCol++] = number++
        }
        // right col downwards
        currentCol-=1
        for(let i= ++currentRow; i<= rows -1 - rotations; i++){
            matrix[currentRow++][currentCol] = number++
        }
<<<<<<< HEAD
        // bottom row
        for(let i= --currentCol; i>= 0 ; i--){
            matrix[currentRow][currentCol] = number++
=======
        // bottom row leftwards
        currentRow-=1
        for(let i= --currentCol; i>= rotations ; i--){
            matrix[currentRow][currentCol--] = number++
        }
        // left col upwards
        currentCol+=1
        currentRow-=1
        for(let i= currentRow; i> rotations ; i--){
            matrix[currentRow--][currentCol] = number++
>>>>>>> 0210dc38b205999b64f073e0ac2ca8424540ddb4
        }
        rotations++
        currentCol++
        currentRow++
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
