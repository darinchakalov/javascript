function multiplicationTable(n){
    console.log("<table border='1'>");
    let firstrow = '';
    let count =1;
    for (let i = 1; i <= n; i++){
        count+=1;
        firstrow+=`<th>${i}</th>`    
    }
    console.log('<tr><th>x</th>'+firstrow+'</tr>');    
    //console.log('<tr><th>x</th>'+new Array(n+1).join(`<th>${count}</th>`)+'</tr>');
    for (let row = 1; row <= n; row++) {
        colprint='';
        for (let col = 1; col <= n; col++){
        colprint += `<td>${row*col}</td>`        
        } 
        console.log(`<tr><th>${row}</th`+colprint+'</tr>');
    }
    console.log('</table>')
}

console.log(multiplicationTable(5));
