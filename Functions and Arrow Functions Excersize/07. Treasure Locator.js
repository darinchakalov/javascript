function treasureLocator(coordinates){
    let x;
    let y;
    for(let i =0; i<coordinates.length; i+=2){
        x = coordinates[i]
        y = coordinates[i+1]
        isOnIsland(x,y)
    }

    function isOnIsland(x,y){
        if((x>=1 && x <=3) && (y>=1 && y<=3)){
            console.log('Tuvalu');
        }
        else if((x >=8 && x<=9)&&(y>=0 && y<=1)){
            console.log('Tokelau')
            }
        else if((x >=5 && x<=7)&&(y>=3 && y<=6)){
            console.log('Samoa')
            }
        else if((x >=0 && x<=2)&&(y>=6 && y<=8)){
            console.log('Tonga')
            }
        else if((x >=4 && x<=9)&&(y>=7 && y<=8)){
            console.log('Cook')
            }
        else{
            console.log('On the bottom of the ocean')
        }
    }
}

console.log(treasureLocator([4,2,1.5,6.5,1,3]))