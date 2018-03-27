function inchesToFoot(inches){
    let foot = Math.floor(inches/12);
    let inch = inches % 12;
    let result = foot+"\'"+'-'+inch+'\"';
    return result;
}

console.log(inchesToFoot(11))