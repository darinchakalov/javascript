function jsonToHtml(string){
    function escapeHtml(text) {
        return text
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#39;");
     }
    string = JSON.parse(string)
    let keys = Object.keys(string[0])
    result = '<table>\n'
    result+=`   <tr>`
    for (let key of keys) {
        result+= `<th>${key}</th>`
    }
    result += '</tr>\n'
    for (let obj of string) {
        result+= '   <tr>'
        for (let i = 0; i < keys.length; i++){
            result+=`<td>${escapeHtml(obj[keys[i]] + '')}</td>`
        }
        result+= '</tr>\n'
    }
    result+='</table>'
    console.log(result);
}

jsonToHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')