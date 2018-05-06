function gameOfEpicness(armiesData, battlesData){
    let armyDataMap = new Map
    
    for(let generalData of armiesData){
        let kingdomName = generalData.kingdom
        let generalName = generalData.general
        let armyAmount = generalData.army
        armyAmount = Number(armyAmount)
        if (armyDataMap.has(kingdomName)){
            if(armyDataMap.get(kingdomName).has(generalName)){
                armyDataMap.get(kingdomName).set(generalName, armyDataMap.get(kingdomName).get(generalName) + armyAmount)
            }else{
                armyDataMap.get(kingdomName).set(generalName, armyAmount)
            }
        }else{
            let armyPerGeneral = []
            armyPerGeneral.set(generalName,armyAmount)
            armyDataMap.set(kingdomName, armyPerGeneral)
        }
    }



    for (let [key, value] of armyDataMap){
        console.log(key);
        for (let [general, army] of armyDataMap.get(key)){
            console.log(`###${general} -> ${army}`);
        }
    }
}

gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
["Stonegate", "Ulric", "Stonegate", "Doran"],
["Stonegate", "Doran", "Maiden Way", "Merek"],
["Stonegate", "Ulric", "Maiden Way", "Merek"],
["Maiden Way", "Berinon", "Stonegate", "Ulric"] ])

