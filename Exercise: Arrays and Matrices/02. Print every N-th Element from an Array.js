function printEveryElement(arr){
    let result = []
    let step = arr.pop()
    for (let i =0; i< arr.length; i+=step){
        result=+ arr[i]
    }
    console.log(result);
}

printEveryElement([5,20,31,4,20,2])