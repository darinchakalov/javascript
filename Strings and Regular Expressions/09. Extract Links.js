function extractLinks(input){
    let regex = /[w]{3}\.[a-zA-Z0-9-]+\.[a-z\.]+/g
    let result = []

    for (let w of input) {
        let match = regex.exec(w)
        while (match) {
            result.push(match)
            match = regex.exec(w)
        }
    }
    console.log(result.join('\n'));
}

let arr = ['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko ']

let result = extractLinks(arr)
console.log(result);

//second version

function extractTheLinks(input) {
    let links = [];
    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;

    for(let sentence of input) {
        let match = null;
        let index = 0;
        while(match = regex.exec(sentence)) {
            console.log(match[0]);
        }
    }
}