function scoreToHTML(string){
    function escapeHtml(text) {
        return text
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#39;");
     }
    string = JSON.parse(string)
    result = '<table>\n'
    result+=`   <tr><th>name</th><th>score</th></tr>\n`
    for (let a of string) {
        result+=`   <tr><td>${escapeHtml(a.name)}</td><td>${a.score}</td></tr>\n`
    }
    result+='</table>'
    console.log(result);
}

scoreToHTML('[{"name":"Pesho & kosta","score":479},{"name":"Gosho","score":205}]')