function lastMonth(input){
    let day = input[0]
    let month = input[1]
    let year = input[2]

    let currentDate = new Date(year, month-1, day)
    let firstDayOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    let lastDayofLastMonth = new Date(firstDayOfCurrentMonth -1)
    let printDay = lastDayofLastMonth.getDate();
    return printDay;
}

console.log(lastMonth([17, 3, 2002]));
