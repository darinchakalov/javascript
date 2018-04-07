function sortArray(arr){
    console.log(arr.sort((a,b) => a.toLowerCase().length - b.toLowerCase().length).join('\n'));
}

sortArray(['alpha','beta','gamma'])
