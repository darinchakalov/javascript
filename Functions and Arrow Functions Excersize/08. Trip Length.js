function tripLength(pointsArr){
    let point1 = {x:pointsArr[0], x:pointsArr[1]}
    let point2 = {x:pointsArr[2], x:pointsArr[3]}
    let point3 = {x:pointsArr[4], x:pointsArr[5]}

    calcDistance(point1,point2)

    function calcDistance(pointA, pointB){
        let distanceX = Math.pow(pointA.x - pointB.x, 2);
        let distanceY = Math.pow(pointA.y - pointB.y, 2);
        console.log(Math.sqrt(distanceX + distanceY))
    }
}

console.log(tripLength([0, 0, 2, 0, 4, 0]));
