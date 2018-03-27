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


  //second version
function isPalindrome(input){
  for (let i=0; i<input.length/2; i++){
    if (input[i] != input[input.legth-i-1]){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('hahahaha'))


//third version

function palindromchi(string){
  return string.split('').reverse().join('') === string;
}

console.log(palindromchi('azsammasza'));
