function extractNonDecresing(arr){
    let result = [arr[0]]
    let bigNum = 1
    for (let i=0; i<arr.length; i++){
       let currentNum = arr[i]
       if (currentNum >= bigNum){
           bigNum = currentNum
           console.log(currentNum)
       }
    }
    
}

extractNonDecresing([1,3,8,4,10,12,3,2,24])

//second version

function extractAnNonDecreasingSubsequenceFromAnArray(input) {
    input = input.map(Number);
    let currentBiggestNum = Number.NEGATIVE_INFINITY;
    let arraySize = input.length;

    for(let i=0; i<arraySize; i++) {
        let currentNumber = input.shift();
        if(currentNumber >= currentBiggestNum) {
            currentBiggestNum = currentNumber;
            console.log(currentNumber);
        }
    }
}

extractAnNonDecreasingSubsequenceFromAnArray([1,3,8,4,10,12,3,2,24])