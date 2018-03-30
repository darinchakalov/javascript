function cookingByNumbers(input){
    let number = input[0]
    let action = '';
      for (let i=1; i<input.length; i++){
        action=input[i];
        number=whatToDo(number, action)
        console.log(number);
      }
    
    
    function whatToDo(number, action){
      switch(action){
        case 'chop': number= number/2;
        return number;
        case 'dice': number= Math.sqrt(number);
        return number;
        case 'spice': number= number+1;
        return number;
        case 'bake': number= number*3;
        return number;
        case 'fillet': number= Math.round((number*0.8)*100/100);
        return number;
      }
    }
  }
  
  console.log(cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']))
  
  //console.log(cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']))