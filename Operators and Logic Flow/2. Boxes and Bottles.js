function boxes(n,k) {
    let neddedboxes = n/k;
    let neededboxes;
    if (neddedboxes % 1 != 0){
        neededboxes = Math.floor(neddedboxes)+1;
    }
    else {
        neededboxes = neddedboxes;
    }
    console.log(neededboxes);
}


//BETTER VERSION
function boxesAndBottles(n,k) {
    console.log(Math.ceil(n/k));
}