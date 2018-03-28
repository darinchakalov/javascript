function aggElements(nums){
    let len = nums.length
    let sum=0;
    let sumA =0;
    let sumStrings='';
    for (let i = 0; i<len; i++){
        sum += nums[i]
        sumA += (1/nums[i])
        sumStrings+= nums[i].toString();
    }
    console.log(sum);
    console.log(sumA);
    console.log(sumStrings);
    
}

console.log(aggElements([1,2,3]));


function aggregateElements(elements){
    aggregate(elements, 0, (a,b) => a +b); 
    aggregate(elements, 0, (a,b) => a + 1/b);
    aggregate(elements, '', (a,b) => a+b);
    function aggregate(arr,initialValue, func){
        let val = initialValue;
        for (let i =0; i< arr.length; i++){
            val = func(val,arr[i]);
        }
        console.log(val);
        
    }
  }

console.log(aggregateElements([1,2,3]));

  