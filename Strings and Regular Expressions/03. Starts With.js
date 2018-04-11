function startsWith(string, start){
    let length = start.length
    let sub = string.substr(0, length)
    if (sub === start){
        console.log('true');
    } else{
        console.log('false');
    }
}

startsWith('How have you been?', 'how')


//second version

function checkIfStringStartsWithAGivenSubstring([string, substring]) {
    console.log(string.startsWith(substring));
}

checkIfStringStartsWithAGivenSubstring('How have you been?', 'how')