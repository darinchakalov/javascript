function figureOfSquares(num){
    let numOfRows= 0;
    let emptySpaces = (2*num -1)-3
    if (num %2 !=0){
        numOfRows=num
    }
    else{
        numOfRows=(num-1);
    }
    let tire = Array(num -1 ).join('-')
    let numOfSpaces = Array((emptySpaces/2)+1).join(' ')
    console.log('+'+tire+'+'+tire+'+')
    for (let i =0; i< (numOfRows-3)/2; i++){
        console.log('|'+numOfSpaces+'|'+numOfSpaces+'|');
        
    }
    console.log('+'+tire+'+'+tire+'+')
    for (let i =0; i< (numOfRows-3)/2; i++){
        console.log('|'+numOfSpaces+'|'+numOfSpaces+'|');
        
    }
    console.log('+'+tire+'+'+tire+'+')
}

console.log(figureOfSquares(5))