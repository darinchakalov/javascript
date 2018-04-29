function usernames(arrayOfStrings){
    let result = new Set
    for (let name of arrayOfStrings){
        result.add(name)
    }
    
    Array.from(result.keys()).sort((a,b) => sortUsernames(a,b)).forEach(user => console.log(user))

    function sortUsernames(a, b) {
        if(a.length != b.length) {
            return(a.length - b.length);
        } else {
            return a.localeCompare(b);
        }
    }
    
}

usernames(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'])