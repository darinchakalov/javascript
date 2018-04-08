function magicMatrix(matrix){
    let sumRow = 0;
    let sumCol = 0;
    for (let row =0; row < matrix.length; row++){
        for (let col =0; col < matrix[row].length; col++){
            sumRow += matrix[row][col]
            sumCol =+ matrix[col][row]
        }
    }
    if (sumRow === sumCol){
        console.log('true');
    }
    else{
        console.log('false');
    }
}

magicMatrix([[4, 5, 6],
             [6, 5, 4],
             [5, 5, 5]])