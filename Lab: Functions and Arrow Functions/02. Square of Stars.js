function squareOfStars(num){
    let stars ='* '.repeat(num);
    for (let row=0; row< num; row++){
      for(let col=0; col <num; col++){
        //stars+='*';
      }
      console.log(stars)
    }
  }


  //second version

function squareOfStars2(n){
  function printStars(count=n){
    console.log("*" + " *".repeat(count-1))
  }
  for(let i =1; i<=n; i++){
    printStars();
  }
}
console.log(squareOfStars2(3));