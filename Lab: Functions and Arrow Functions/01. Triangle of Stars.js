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