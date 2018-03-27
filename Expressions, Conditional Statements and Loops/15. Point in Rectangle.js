function pointInRectagle(coordinates){
    let x = coordinates[0]
    let y =coordinates[1]
    let xMin = coordinates[2]
    let xMax = coordinates[3]
    let yMin = coordinates[4]
    let yMax = coordinates[5]
    if ((x >= xMin && x <= xMax) && (y >= yMin && y <= yMax)){
        console.log("inside");
    }
    else {
        console.log("outside");
    }
}