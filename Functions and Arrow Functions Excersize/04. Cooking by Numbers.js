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


  //second version

  function cookingByNumber(arr){
    let number = arr[0]
    let opearations = {
      chop: (num) => num/2,
      dice: (num) => Math.sqrt(num),
      spice: (num) => ++num,
      bake: (num) => num *3,
      fillet: (num) => num *0.8
    }
    for (let index = 1; index < arr.length; index++){
      const currrentOperation = arr[index]
      number = opearations[currrentOperation](number)
      console.log(number)
        }
  }

  console.log(cookingByNumber([9, 'dice', 'spice', 'chop', 'bake', 'fillet']))