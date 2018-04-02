  function modifyAverage(num){
      let numStr = String(num);
      let getAverage = (numString) => numStr.split('').map(Number).reduce((a,b) => a += b, 0) / numStr.length

      while (getAverage(numStr) <= 5) {
        numStr += '9'
      }
      console.log(numStr)
  }
  console.log(modifyAverage(101))


//second version

function modifyAverage(num){
  let numStr = String(num);
  let getAverage = (numString) =>{
    let sum =0;
    for (let i =0; i < numString.length; i++){
        const element = Number(numString[i])
        sum+=element
    }
    return sum / numString.length
  }
  while (getAverage(numStr) <= 5) {
    numStr += '9'
  }
  console.log(numStr)
}
console.log(modifyAverage(101))