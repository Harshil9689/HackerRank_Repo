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

// Complete the weightedUniformStrings function below.
function weightedUniformStrings(s, queries) {
let m = {}
    let w = new Set()
    let k = s[0]
    w.add(s.charCodeAt(0) - 96)
    let c = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === k) {
            c++  
        } else {
            k = s[i]
            c = 1;
        }
        w.add(c * (s.charCodeAt(i) - 96))
    }
    console.log(w)
    let r = []
    for (let i = 0; i < queries.length; i++) {
         if (w.has(queries[i])) {
            r.push('Yes')
        } else r.push('No')
    }
    return r

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = weightedUniformStrings(s, queries);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
