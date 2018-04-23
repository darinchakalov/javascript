function storageCatalogue(arrayOfStrings){
    let catalog = new Map
    let upperCaseLetters = new Set
    for (let string of arrayOfStrings){
        let [product, price] = string.split(' : ')
        catalog.set(product, price)
        let firstLetter = product[0].toUpperCase()
        if(!upperCaseLetters[firstLetter]){
            upperCaseLetters.add(firstLetter)
        }
    }
    let sortedLetters = Array.from(upperCaseLetters.values()).sort()
    for (let letter of sortedLetters){
        console.log(letter);
        for (let key of [...catalog.keys()].sort()){
             if (key[0].toUpperCase() === letter){
                 console.log(`  ${key}: ${catalog.get(key)}`);                 
             }
        }
    }
}

storageCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])