function expressionSplit(str){
    let regex = /[,;().\s]+/
    str.split(regex).forEach(element => console.log(element))
}

expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}')