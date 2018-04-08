function orbit(rows,cols,x,y){
    let start = 1;
    function createMatrix(rows,cols){
        let matrix = []
        for(let i =0; i < rows; i++){
        matrix.push(''.repeat(cols).split('').map(Number))
            }
        return matrix
    }
    let matrix = createMatrix(rows,cols)
    matrix[x][y]= start

    for (let i = 0; i <= rows -1; i++){
        matrix[i][i]=start++
    }
    start = 1
    for (let i = 0; i <= rows -1; i++){
        matrix[x][y++]=start++
    }
    start = 1
    x= 0
    y=0
    for (let i = 0; i <= rows -1; i++){
        matrix[x++][y]=start++
    }

    printMatrix(matrix)
    function printMatrix(matrix){
        console.log(matrix.map(e => e.join(' ')).join('\n'));
    }
    
}

orbit(4,4,0,0)