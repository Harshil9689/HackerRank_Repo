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

// Complete the closestNumbers function below.
function closestNumbers(arr) {
     let minimum = 0;
    let values = [];
    let diff = 0;
    
    arr.sort(function (a,b) {return a-b;});
    for (let i=0; i<arr.length-1; i++) {
        diff = arr[i+1]-arr[i];
        if (minimum==0 | diff<minimum) {
            minimum = diff;
            values = [];
            values.push(arr[i]);
            values.push(arr[i+1]);
        } else if (minimum==diff) {
            values.push(arr[i]);
            values.push(arr[i+1]);
        }
    } return values;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}