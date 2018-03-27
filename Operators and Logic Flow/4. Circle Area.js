// Plosht = (Pi*r)*(Pi*r)

function circleArea(radius) {
    let area = Math.PI*(Math.pow(radius, 2));
    console.log(area);
    console.log(area.toFixed(2));
}

console.log(circleArea(5))