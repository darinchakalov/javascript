function tripLength(pointsArr){
    let point1 = {x:pointsArr[0], y:pointsArr[1]}
    let point2 = {x:pointsArr[2], y:pointsArr[3]}
    let point3 = {x:pointsArr[4], y:pointsArr[5]}
    // gornite 3 reda moga da gi spestq kato napusha sledniq map:
    // let [x1, y1, x2, y2, x3, y3] = input.map(Number);
    let dist123 = calcDistance(point1,point2) + calcDistance(point2,point3)
    let dist213 = calcDistance(point2,point1) + calcDistance(point1,point3)
    let dist132 = calcDistance(point1,point3) + calcDistance(point3,point2)

    let shortestDistance = Math.min(dist123, dist132, dist213)

    if (shortestDistance == dist123) {
        console.log(`1->2->3: ${shortestDistance}`)
        return;
    }
    if (shortestDistance == dist132) {
        console.log(`1->3->2: ${shortestDistance}`)
        return;
    }
    if (shortestDistance == dist213) {
        console.log(`2->1->3: ${shortestDistance}`)
        return;
    }

    function calcDistance(pointA, pointB){
        let distanceX = Math.pow(pointA.x - pointB.x, 2);
        let distanceY = Math.pow(pointA.y - pointB.y, 2);
        return Math.sqrt(distanceX + distanceY);
    }
}

console.log(tripLength([5, 1, 1, 1, 5, 4]));
