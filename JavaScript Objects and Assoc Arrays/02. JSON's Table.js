function jsonTable(empoyies){
    //empoyies = JSON.parse(empoyies)
    function escapeHtml(text) {
        return text
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#39;");
     }
     let result = '<table>\n'
     for (let employ of empoyies){
        let table = JSON.parse(employ)
        result+='   <tr>\n' 
        result += `      <td>${escapeHtml(table.name)}</td>\n`
        result += `      <td>${escapeHtml(table.position)}</td>\n`
        result += `      <td>${table.salary}</td>\n`
        result+='   <tr>\n' 
     }
     result += '</table>'
     console.log(result);
}

jsonTable('[{"name":"Pesho","position":"Promenliva","salary":100000},{"name":"Teo","position":"Lecturer","salary":1000},{"name":"Georgi","position":"Lecturer","salary":1000}]')

//second version for the escape function using Map
function escapeHtml(text) {
    let map = { '"': '&quot;', '&': '&amp;',
                "'": '&#39;', '<': '&lt;', '>': '&gt;' };
            return text.replace(/[\"&'<>]/g, ch => map[ch]);
}