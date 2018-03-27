function assignProp(input){
    let firstKey = input[0].toString();
    let firstValue = input[1]
    let secondKey = input[2]
    let secondValue = input[3]
    let thirdKey = input[4]
    let thirdValue = input[5]

    let object ={
    [firstKey]: firstValue,
    [secondKey]: secondValue,
    [thirdKey]: thirdValue
    }

    return object;
}
console.log(assignProp(['ssid', '90127461', 'status', 'admin', 'expires', '600']));


