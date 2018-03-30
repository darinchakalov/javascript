function modifyAverage(num){
    let nums = num.toString();
    //console.log(caclulateAvarage(nums))
    function caclulateAvarage(nums){
      let sum=0;
      for (let i=0; i<=nums.length; i++){
        let test = parseInt(nums[i]);
        sum += Number(test);  
        console.log(Number(test))            
      }
      console.log(sum)
      let avarage = sum/nums.length
      return avarage;
      /*if (avarage>5){
        console.log('wow')
        return true;
        
      }
      else{
        console.log('not')
        return false;
      }*/
    }
  }
  
  console.log(modifyAverage(5665))