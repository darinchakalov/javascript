function extractNonDecresing(arr){
    function myfiler(){
        let result = []
        for (let i = 0; i< arr.length; i++){
            if(arr[i]> arr[i-1]){
                return arr[i]
            }
        }
    }
    console.log(arr.filter(myfiler).join('\n'));
}

extractNonDecresing([1,3,8,4,10,12,3,2,24])