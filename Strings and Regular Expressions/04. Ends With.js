function endWith(string, end){
    let length = end.length
    let sub = string.substr(string.length-length)
    if (sub === end){
        console.log('true');
    } else{
        console.log('false');
    }
}

endWith('This sentence ends with fun?', 'fun?')

//second version

function checkIfStringEndsWithAGivenSubstring([string, substring]) {
    console.log(string.endsWith(substring));
}

checkIfStringEndsWithAGivenSubstring('How have you been?', 'how')