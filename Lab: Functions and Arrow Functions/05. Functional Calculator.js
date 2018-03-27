function calculator(num1, num2, operator){
    switch(operator){
      case '+':
        console.log(num1+num2);
        break;
      case '-':
        console.log(num1-num2);
        break;
      case '*':
        console.log(num1*num2);
        break;
      case '/':
        console.log(num1/num2);
        break;
      default:
        console.log('error')
    }
  }


  //second version

function calculate(a,b,op){
  let cacl = function(a,b,op){return op(a,b)};
  let add= function(a,b){return a+b};
  let substract= function(a,b){return a-b};
  let multiply= function(a,b){return a*b};
  let devide= function(a,b){return a/b};
  switch(op){
    case '+': return cacl(a,b, add);
    case '-': return cacl(a,b, substract);
    case '*': return cacl(a,b, multiply);
    case '/': return cacl(a,b, devide);
  }
}
  
console.log(calculate(18,-1,"*"))