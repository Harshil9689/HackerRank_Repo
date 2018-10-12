'use strict';

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
const BigNumber = require('bignumber.js')
// Complete the separateNumbers function below.
function separateNumbers(s) {
if (s[0] === '0' || s.length < 2) return console.log('NO')

    for (let i = 1, l = Math.floor(s.length / 2); i <= l; i++) {
        if (s[i] === '0') continue
        let x = new BigNumber(s.slice(0, i))
        let bs = ''
        while (bs.length < s.length) {
            bs += x.toString()
            x = new BigNumber(x).plus(1)
        }
        if (bs === s) return console.log(`YES ${s.slice(0, i)}`)
    }

    return console.log('NO')

}

function main() {
    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        separateNumbers(s);
    }
}
