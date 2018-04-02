function validityChecker(inputArr){
    let x1=inputArr[0]
    let y1=inputArr[1]
    let x2=inputArr[2]
    let y2=inputArr[3]
    let z1 = 0;
    let z2 = 0;
    isValid(x1,y1,z1,z2)
    isValid(x2,y2,z1,z2)
    isValid(x1,y1,x2,y2)

    function isValid(pointA1, pointA2, pointB1, pointB2){
        let distance1 = Math.pow(pointA1 - pointB1, 2);
        let distance2 = Math.pow(pointA2 - pointB2, 2);
        let distBetweenPoints = Math.sqrt(distance1 + distance2)
        if (Number.isInteger(distBetweenPoints)){
            console.log( `{${pointA1}, ${pointA2}} to {${pointB1}, ${pointB2}} is valid`)
            }
        else{
            console.log( `{${pointA1}, ${pointA2}} to {${pointB1}, ${pointB2}} is invalid`)
            }
        }
    }


console.log(validityChecker([2,1,1,1]))