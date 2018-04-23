function heroicInventory(arr){
    let result = []
    for (let line of arr){
        let [name, level, items] = line.split(/\s*\/\s*/)
        let singleItem = []
        if (items){
            singleItem = items.split(', ')
        }
        let hero = {name: name, level: Number(level), items: singleItem}
        result.push(hero)
    }
    console.log(JSON.stringify(result));   
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])