function emailValidation(str){
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/
    if (regex.test(str)){
        console.log('Valid')
    } else{
        console.log('Invalid');        
    }
}

emailValidation('valid@email1.bg')