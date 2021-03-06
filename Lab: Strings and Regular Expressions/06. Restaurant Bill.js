function restaurantBill(arr){
    let products = []
    let sum =0;
    for (let i =0; i < arr.length; i+=2){
        products.push(arr[i])
        sum += Number(arr[i+1])
    }
    console.log('You purchased ' + products.join(', ') + ' for a total sum of ' + sum);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])


//second version

function restaurantBill(arr){
    let products = arr.filter((str, i) => i % 2 == 0).join(', ')
    let sum = arr.filter((str, i) => i % 2 !== 0).map(str => Number(str)).reduce((a,b) => a + b)
    console.log(`You purchased ${products} for a total sum of ${sum}`);
    
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])