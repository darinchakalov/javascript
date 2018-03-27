function cone(r,h) {
    let v = (1/3)*Math.PI*Math.pow(r, 2)*h;
    let s = Math.PI* r*r;
    let b = Math.PI*r*s;
    console.log(v.toFixed(4));
    console.log(b.toFixed(4));
}


console.log(cone(3,5))


//presentation
function cone(r, h) {let s =
    Math.sqrt(r * r + h * h);


    let volume = Math.PI * r * r * h / 3;


    console.log("volume = " + volume);


    let area = Math.PI * r * (r + s);


    console.log("area = " + area);


}