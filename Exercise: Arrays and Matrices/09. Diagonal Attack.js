function diagonalAttack (matrix){
    matrix = matrix.map(row => row.split(' ').map(Number))
    let normalDiagonal =0
    let backDiagonal =0
    
    for (let row =0; row < matrix.length; row++){
        normalDiagonal+= matrix[row][row]
        backDiagonal += matrix[row][matrix.length -1 - row]
    }
    if (normalDiagonal === backDiagonal){
        for (let row =0; row < matrix.length; row++){
            for (let col =0; col < matrix.length; col++){
                if (row == col || row+col+1 == matrix.length ){
                    continue                  
                }
                else{
                    matrix[row][col] = normalDiagonal
                }
            }
        }
        console.log(matrix.map(e => e.join(' ')).join('\n'));  
    }
    else{
        console.log(matrix.map(e => e.join(' ')).join('\n'));        
    }
}

diagonalAttack(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1'])