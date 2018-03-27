function dayOfWeek(day){
    let weekday = day.toLowerCase();
    switch(weekday){
      case 'monday':
        console.log('1')
        break;
      case 'tuesday':
        console.log('2')
        break;
      case 'wednesday':
        console.log('3')
        break;
      case 'thursday':
        console.log('4')
        break;
      case 'friday':
        console.log('5')
        break;
      case 'saturday':
        console.log('6')
        break;
      case 'sunday':
        console.log('7')
        break;
      default:
        console.log('error')
    }
  }



//second version - return mi dava realno index-a na stringa v array-a 

function daysOfWeek(day){
  let arr = ['Monday', 'Tuesday', 'Wednesday', 'Tursday', 'Friday', 'Saturday', 'Sunday']
  let index = arr.indexOf(day)
  return index > -1 ? index +1 : 'error'
}

console.log(daysOfWeek("Monday"))