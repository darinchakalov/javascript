function templateFormat(elements){
    let question = '';
    let answer = '';
    let templ = '';
    console.log(`<?xml version="1.0" encoding="UTF-8"?>\n<quiz>`)
    for (let i =0; i <elements.length; i+=2){
      question = elements[i]
      answer = elements[i+1]
      templatemiddle(question, answer)
    }
    
    function templatemiddle(question, answer){
      console.log(`<question>\n ${question} \n</question>\n  <answer>\n ${answer} \n</answer>`);
    }
    console.log('</quiz>')
  }
  
  
  console.log(templateFormat(['kostaa?', 'nishtoo', 'pak ta pitam?', 'stiga pita']))