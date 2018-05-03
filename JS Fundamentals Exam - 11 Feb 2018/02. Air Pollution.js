function airPolution(inputMap, data){
    let mapOfSofia = inputMap.map(rows => rows.split(" "). map(Number));    

    for (let cmd of data){
        let token = cmd.split(' ')
        let command = token[0]
        let value = Number(token[1])

        if (command.toLowerCase() === "breeze" && value >= 0 && value < mapOfSofia.length){
            for(let i = 0; i< mapOfSofia[value].length; i++){
                mapOfSofia[value][i] -= 15
                if (mapOfSofia[value][i] < 0){
                    mapOfSofia[value][i] =0
                }
            }
        }else if(command.toLowerCase() === "gale"){
                for (let j=0; j < mapOfSofia.length; j++){
                    if (value >= 0 && value < mapOfSofia[j].length){
                        mapOfSofia[j][value] -= 20
                        if (mapOfSofia[j][value] < 0){
                            mapOfSofia[j][value] =0
                        }
                    }
                }
        }else if (command.toLowerCase() === "smog") {
            for (let row =0; row < mapOfSofia.length; row++){
                for (let col =0; col < mapOfSofia[row].length; col++){
                    mapOfSofia[row][col] += value
                }
            }
        }
    }
    let polluted = []
    for (let row =0; row < mapOfSofia.length; row++){
        for (let col =0; col < mapOfSofia[row].length; col++){
            if (mapOfSofia[row][col] >= 50){
                polluted.push(`[${row}-${col}]`)
            }
        }
    }

    if (polluted.length > 0){
        console.log('Polluted areas: ' + polluted.join(', '));
    }else{
        console.log('No polluted areas');
    }
    
}

airPolution([
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
   ],
   ["breeze 1", "gale 2", "smog 25"])