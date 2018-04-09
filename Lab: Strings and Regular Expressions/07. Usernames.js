function usernames(arr){
    let result = []
    for (const email of arr) {
        let [alias, domain] = email.split('@')
        let username = alias + '.'
        let domainParts = domain.split('.')
        domainParts.forEach(element => username += element[0])
        result.push(username)
    }
    console.log(result.join(', '));    
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']) 