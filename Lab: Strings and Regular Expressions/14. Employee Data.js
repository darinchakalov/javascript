function employeeData(data){
    //let regex = /^([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([a-zA-Z0-9 -]+)/    
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9\- ]+)$/
    for (let employee of data) {
        let match = regex.exec(employee)
        if (match){
            console.log(`Name: ${match[1]}\n` +
            `Position: ${match[3]}\n` +
            `Salary: ${match[2]}`);
        }
    }
}

employeeData(['Isacc - 1000 - CEO\n' +
                'Ivan - 500 - Employee\n' +
                'Peter - 500 - Employee'])