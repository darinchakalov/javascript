function formFiller(username,email,phone,form){
    from = form.split('\n')
    data.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, username);      
        line = line.replace(/<@[a-zA-Z]+@>/g, email);       
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
        console.log(line);
        });
}

formFiller('Pesho','pesho@softuni.bg','90-60-90\n', +
['Hello, <!username!>!\n', +
 'Welcome to your Personal profile.\n', +
  'Here you can modify your profile freely.\n', +
   'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)\n', +
    'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)\n', +
 'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'])