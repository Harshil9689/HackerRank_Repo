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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function isPrime(num) {
    const max = Math.sqrt(num)
    for(let i = 2; i <= max; i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function nextPrime(num) {
    let next = num + 1;
    while(!isPrime(next)) next += 1;
    return next;
}

/*
 * Complete the waiter function below.
 */
function waiter(number, q) {
    let prime = 1;
    let result = [];
    for(let i = 0; i < q; i++) {
        prime = nextPrime(prime);
        console.log(prime)
        const a = [];
        const b = [];
        number.reverse().forEach(n => {
            if(n % prime === 0) b.unshift(n);
            else a.push(n);
        });
        result = [...result, ...b]
        number = a;
    }
    result = [...result, ...number.reverse()]
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    const number = readLine().split(' ').map(numberTemp => parseInt(numberTemp, 10));

    let result = waiter(number, q);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
