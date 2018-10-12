'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the gemstones function below.
function gemstones(arr) {
 var pres = [];
    var freqCur = [];
    for(let i = 0; i < 26; i++)
        pres[i] = 0;
    
    
    for(let i = 0; i < arr.length; i++) {
        for(let i = 0; i < 26; i++)
            freqCur[i] = 0;
        for(let j = 0; j < arr[i].length; j++) {
            freqCur[(arr[i].charCodeAt(j)) - 97]++;
        }
        for(let i = 0; i < 26; i++)
            if(freqCur[i] > 0) {
                pres[i]++;
            }
    }
    var elements = 0;
    for(let i = 0; i < 26; i++)
            if(pres[i] == arr.length)
               elements++;
    return elements;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    let result = gemstones(arr);

    ws.write(result + "\n");

    ws.end();
}
