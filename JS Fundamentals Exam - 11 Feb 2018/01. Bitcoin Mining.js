function bitcoinMining(data){
    let bitcoinsBought = 0
    let daysCount = 1
    let amountOfGold = 0 
    let dollarsInGold = 0
    let dayBoughtOn = 0
    for (let i = 0; i<data.length; i++){
        if (daysCount == 3){
            data[i] = 0.7* data[i]
        }
        amountOfGold += data[i]
        dollarsInGold = amountOfGold * 67.51
        dollarsInGold = dollarsInGold.toFixed(2)
        if (dollarsInGold >= 11949.16){
            bitcoinsBought++
            dollarsInGold -= 11949.16
            amountOfGold = dollarsInGold / 67.51
        }
        if (bitcoinsBought >=1 && bitcoinsBought <2){
            dayBoughtOn = daysCount
        }
        daysCount++
    }
    console.log(dayBoughtOn, dollarsInGold, bitcoinsBought);
}

bitcoinMining([100, 200, 300])