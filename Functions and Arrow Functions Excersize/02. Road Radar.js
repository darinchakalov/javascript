function roadRadar(data){
    let speed = data[0]
    let area = data[1]
    let limit =getLimit(area);
    let howMuchSpeeding = isSpeeding(speed,limit)
    if (howMuchSpeeding){
      console.log(howMuchSpeeding)
    }
    
    function getLimit(area){
      switch(area){
        case 'motorway': return 130;
        case 'interstate': return 90;
        case 'city': return 50;
        case 'residential': return 20;
      }
    }
    function isSpeeding(speed, limit){
        let overSpeed = speed - limit;
        if(overSpeed<=0){
          return false;
        }
        else{
          if(overSpeed <=20){
            return 'speeding';
          }
          else if(overSpeed > 20 && overSpeed<= 40){
            return 'excessive speeding';
          }
          else{
            return 'reckless driving'
          }
        }
      }
  }
  
  console.log(roadRadar([60, 'city']))
  