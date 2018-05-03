function bitcoinMining(data){
    data = data.map(Number)
    let bitcoinsBought = 0
    let daysCount = 1
    let amountOfGold = 0 
    let dollarsInGold = 0
    let dayBoughtOn = []
    let costOfBitcoin = 11949.16
    let canAfford=0;
    let dollarsLeft = 0
    for (let i = 0; i<data.length; i++){
        if (daysCount == 3){
            data[i] = 0.7* data[i]
        }
        amountOfGold += data[i]
        dollarsInGold = amountOfGold * 67.51
        if (dollarsInGold >= costOfBitcoin){
            canAfford = Math.floor(dollarsInGold / costOfBitcoin)
            bitcoinsBought+= canAfford
            dollarsLeft = dollarsInGold - (costOfBitcoin*canAfford)
            amountOfGold = dollarsLeft / 67.51
            if (bitcoinsBought >=1 ){
                dayBoughtOn.push(daysCount)
            }
            dollarsInGold = dollarsLeft
        }
        
        daysCount++
    }

    dollarsInGold = Math.round(dollarsInGold*100) / 100
    dollarsInGold = Number(dollarsInGold)

    if(bitcoinsBought > 0){
        console.log(`Bought bitcoins: ${bitcoinsBought}`);
        console.log(`Day of the first purchased bitcoin: ${dayBoughtOn[0]}`);
        console.log(`Left money: ${dollarsInGold} lv.`);
    }else{
        console.log(`Bought bitcoins: ${bitcoinsBought}`);
        console.log(`Left money: ${dollarsInGold} lv.`);
    }
}

bitcoinMining([50,100])