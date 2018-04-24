function autoEngineeringCompany(arrayOfStrings){
    let brands = new Map
    for (let row of arrayOfStrings){
        let [brandName, carModel, producedCars] = row.split(' | ')
        producedCars = Number(producedCars)
        if (brands.has(brandName)){
            if (brands.get(brandName).has(carModel)){
                brands.get(brandName).set(carModel, brands.get(carModel) + Number(producedCars))
            }else {
                brands.get(brandName).set(carModel, producedCars)
            }
        }else{
            let carModelMap = new Map
            carModelMap.set(carModel, producedCars)
            brands.set(brandName, carModelMap)
        }
    }
    for (let [key, value] of brands){
        console.log(key);
        for (let [car, produced] of brands.get(key)){
            console.log(`###${car} -> ${produced}`);
        }
    }
}

autoEngineeringCompany([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
])