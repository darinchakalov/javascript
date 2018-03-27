function palindrome(input){
    var len = Math.floor(input.length / 2);
    let not = 'true';
    for (var i = 0; i < len; i++)
      if (input[i] !== input[input.length - i - 1])
        not = 'false'
      else{
        continue;
      }  
      console.log(not)
  
  }