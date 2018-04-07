function printEveryElement(arr){
    let result = []
    // here the problem was that the pop function was taking the last element as string so casting it to
    //number solved the issue
    let step = Number(arr.pop())
    for (let i =0; i< arr.length; i+=step){
        result.push(arr[i])
    }
    console.log(result.join('\n'));
}

printEveryElement([5,20,31,4,20,2])

// second version

function printEveryNthElementFromAnArray(input) {
    let step = Number(input.pop());

    input.filter((element, index) => index % step == 0).forEach(element => console.log(element));
}

printEveryNthElementFromAnArray([5,20,31,4,20,2])