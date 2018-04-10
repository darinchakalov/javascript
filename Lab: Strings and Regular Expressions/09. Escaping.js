function htmlList(items){ 
    let result = '<ul>\n'
    for (let str of items) {
        result+='   <li>' + htmlEscape(str) + '</li>\n'
    }
    result+='</ul>'
    console.log(result)
    function htmlEscape(str) {           
        return str.replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')        
    }
}

htmlList()