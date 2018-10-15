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

// Complete the encryption function below.
function encryption(s) {
const l = Math.sqrt(s.length);
    let r = Math.floor(l);
    let c = Math.floor(l);
    if (r * c < s.length) c++;
    if (r * c < s.length) r++;
    let p = '';
  
    for (let i = 0; i < c; i++) {
        for (let j = 0; j < r; j++) {
            p += s.substr(i + j * c, 1)
        }
        p += ' ';
    }
    return p;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
