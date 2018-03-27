function quadraticEquation(a,b,c){
    let d = Math.pow(b ,2)-(4*a*c)
    if (d > 0){
        let firstx = (-b) + Math.sqrt(d)
        let second = 2*a
        let firsty = (-b) - Math.sqrt(d)
        let x1 = firstx / second
        let x2 = firsty / second
        
        console.log(Math.min(x1, x2))
        console.log(Math.max(x1,x2))
    }
    else if(d === 0 ){
        console.log((-b)/(2*a));
    }
    else{
        console.log('no');        
    }
}

console.log(quadraticEquation(6,11,-35));
