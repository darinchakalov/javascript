function sortArray(arr){
    console.log(arr.sort(function(a,b){
        return a.toLowerCase().localeCompare(b.toLowerCase())}).sort((a,b) => a.length - b.length).join('\n'));
}

sortArray(['test','Deny','omen','Default'])
