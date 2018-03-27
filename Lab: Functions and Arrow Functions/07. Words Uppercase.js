function toUppecase(input){
    let stringArr = input.toString().replace(/[.](?=.*?\.)/g, '');
    let result ='';
    for (let i =0; i< stringArr.lenght; i++){
        result+=stringArr[i].toUppecase
    }
    console.log(result)
}

console.log(toUppecase(['Hi, how are you?']))