function lowestPriceInCities(data){
    let towns = new Map()
    for (let entry of data){
        let [town, product, price] = entry.split(/\s*\|\s*/)
        if(! towns.has(product)) {
            towns.set(product, new Map());
        }
        towns.get(product).set(town, price);
    }
    for(let [product, insideMap] of towns) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let townWithLowestPrice = "";
        for(let [town, price] of insideMap) {
            if(price < lowestPrice) {
                lowestPrice = price;
                townWithLowestPrice = town;
            }
        }
        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }   
}

lowestPriceInCities([
'Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'
])