function matchMultiplication(text) {
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+\.\d+)/g, 
    (match, num1, num2) => Number(num1) * Number(num2)) 
    console.log(text);    
}
matchMultiplication('My bill is: 4 * 2.50 (beer); 12* 1.50 (kepab); 1  *4.50 (salad); 2  * -0.5 (deposit).')