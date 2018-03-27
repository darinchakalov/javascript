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
