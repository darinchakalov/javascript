function distance(myArray){
    let time = myArray[2]/3600
    let distanceA = myArray[0]*time;
    let distanceB = myArray[1]*time;
    console.log(Math.abs(distanceA-distanceB)*1000);
}

console.log(distance([0, 60, 3600]))  