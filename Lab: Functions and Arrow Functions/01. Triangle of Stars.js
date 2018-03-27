function triangleOfStars(num){
    for (let rows =0; rows <= num; rows++ ){
        let stars='';
        for ( let cols =0; cols <rows; cols++){
            stars+='*';
        }
        console.log(stars);
    }
    for (let rows =num-1; rows >= 1; rows-- ){
        let stars='';
        for ( let cols =rows; cols >0; cols--){
            stars+='*';
        }
        console.log(stars);
    }
}




//second version

function printTriangle(n){
    function printStars(count){
      console.log("*".repeat(count));
    }
    for (let rows =1; rows <= n; rows++ ) printStars(rows);
    for ( let cols =n-1; cols > 0; cols--) printStars(cols);
  }
  
  
  console.log(printTriangle(5))